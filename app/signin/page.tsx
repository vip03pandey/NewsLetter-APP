"use client";

import { createClient } from "@/lib/client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  async function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setMessage(null);
    
    try {
      const supabase = createClient();
      console.log("Supabase client created");
      
      if(isSignUp){
         console.log("Attempting sign up...");
         const {error, data} = await supabase.auth.signUp({
           email,
           password,
           options: {
             data: {
               name: name,
               display_name: name
             }
           }
         });
         console.log("Sign up result:", {error, data});
         if(error) throw error;
         setMessage("Check your email for the confirmation link!");
      }
      else{
         console.log("Attempting sign in...");
         const {error, data} = await supabase.auth.signInWithPassword({email,password});
         console.log("Sign in result:", {error, data});
         if(error) throw error;
         console.log("Login successful, redirecting to dashboard...");
         window.location.href = "/dashboard";
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  // Clear name field when switching to sign in
  const handleAuthModeSwitch = () => {
    setIsSignUp(!isSignUp);
    setError(null);
    setMessage(null);
    if (!isSignUp) {
      setName(""); // Clear name when switching to sign in
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-white dark:bg-black px-4 sm:px-6 lg:px-8">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial gradient fade overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 sm:text-5xl">
            Personalized AI Newsletter
          </h1>
          <p className="mt-2 text-lg text-gray-500 dark:text-gray-300">
            {isSignUp ? "Create your account" : "Sign in to your account"}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/60 dark:bg-white/10 backdrop-blur-lg border border-white/30 dark:border-white/20 shadow-2xl rounded-2xl p-8 space-y-6">
          <form className="space-y-5" onSubmit={handleAuth}>
            
            {error && (
              <div className="bg-red-100 text-red-700 text-sm px-4 py-2 rounded-md border border-red-300">
                {error}
              </div>
            )}
            {message && (
              <div className="bg-green-100 text-green-700 text-sm px-4 py-2 rounded-md border border-green-300">
                {message}
              </div>
            )}

            {/* Name Input - Only show during signup */}
            {isSignUp && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  required={isSignUp}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>
            )}

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-black dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter password"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={cn(
                "w-full py-2 px-4 rounded-lg font-semibold transition shadow-md text-white",
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
              )}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4zm2 5.3A8 8 0 014 12H0c0 3 1.1 5.8 3 7.9l3-2.6z"
                    />
                  </svg>
                  {isSignUp ? "Creating..." : "Signing in..."}
                </div>
              ) : isSignUp ? (
                "Create Account"
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Switch Auth Mode */}
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={handleAuthModeSwitch}
              className="text-sm text-indigo-100 hover:text-indigo-500 underline font-medium transition"
            >
              {isSignUp
                ? "Already have an account? Sign in"
                : "Don't have an account? Sign up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}