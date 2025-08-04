"use client";
import { createClient } from "@/lib/client";
import { Session, User } from "@supabase/supabase-js";
import { createContext, useEffect,useContext } from "react";
import { useState } from "react";

interface AuthContextType{
    user:User | null;
    session:Session | null;
    loading: boolean;
    signOut:()=>Promise<void>
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }:{children:React.ReactNode}) {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const supabase=createClient()
    useEffect(()=>{
        supabase.auth.getSession().then(({data:{session}})=>{
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
        })
        const {data:{subscription}}=supabase.auth.onAuthStateChange((_event,session)=>{
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false)
        })
        return ()=>{
            subscription.unsubscribe();
        }
    },[])
    async function signOut(){
        await supabase.auth.signOut();
    }
    const value={user,session,loading,signOut};
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = ()=>{
    const context=useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
}