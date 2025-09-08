import { createServerClient } from '@supabase/ssr'
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
import { inngest } from '@/lib/inngest/client';

export async function POST(request: NextRequest) {
    const cookieStore = await cookies()
    
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value
                },
            },
        }
    )
    
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
    
    const body = await request.json();
    const { categories, frequency, email } = body
    if (!categories || !frequency || !email) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }
    
    const { data, error: upsertError } = await supabase.from("user_preferences").upsert({
        user_id: user.id,
        categories,
        frequency,
        email,
        is_active: true
    }, { onConflict: "user_id" })
    
    if (upsertError) {
        return NextResponse.json({ error: upsertError.message }, { status: 500 })
    }
    const {}=await inngest.send({
        name:"newsletter.schedule",
        data:{
            
        }
    })
    return NextResponse.json({ data }, { status: 200 })
}