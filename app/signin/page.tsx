"use client"
import { useState } from "react";

export default function SignIn() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    
    return (
        <div className="relative min-h-screen overflow-hidden bg-black">
            {/* Geometric Background Pattern */}
            <div className="absolute inset-0">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                {/* Diagonal Lines */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white to-transparent transform rotate-12"></div>
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-transparent via-white to-transparent transform -rotate-12"></div>
                </div>
                
                {/* Floating Geometric Shapes */}
                <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rotate-45 animate-pulse"></div>
                <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full animate-bounce"></div>
                <div className="absolute bottom-32 left-32 w-40 h-40 border-2 border-white/5 rotate-12"></div>
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-radial from-gray-900/20 via-black/40 to-black"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    {/* Header */}
                    <div className="text-center">
                        {/* Logo */}
                        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-2xl">
                            <svg className="h-8 w-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        
                        <h1 className="text-4xl font-bold text-white mb-2">
                            AI Newsletter
                        </h1>
                        <p className="text-lg text-gray-400">
                            {isSignUp ? "Join thousands of readers" : "Welcome back"}
                        </p>
                    </div>

                    {/* Form Container */}
                    <div className="border border-gray-800 bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
                        <div className="space-y-6">
                            {/* Name Field (Only for Sign Up) */}
                            {isSignUp && (
                                <div className="space-y-2">
                                    <label className="block text-sm font-semibold text-white">
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            placeholder="Enter your full name"
                                            className="w-full rounded-lg border border-gray-700 bg-black/50 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-white focus:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/20"
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                            <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-white">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email"
                                        className="w-full rounded-lg border border-gray-700 bg-black/50 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-white focus:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/20"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="space-y-2">
                                <label className="block text-sm font-semibold text-white">
                                    Password
                                </label>
                                <div className="relative">
                                    <input 
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="w-full rounded-lg border border-gray-700 bg-black/50 px-4 py-3 text-white placeholder-gray-500 transition-all focus:border-white focus:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/20"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-white transition-colors"
                                    >
                                        {showPassword ? (
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 001.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                            </svg>
                                        ) : (
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Remember Me / Forgot Password */}
                            {!isSignUp && (
                                <div className="flex items-center justify-between text-sm">
                                    <label className="flex items-center space-x-2 text-gray-400">
                                        <input type="checkbox" className="rounded border-gray-600 bg-gray-800 text-white focus:ring-white/20" />
                                        <span>Remember me</span>
                                    </label>
                                    <a href="#" className="text-white hover:text-gray-300 transition-colors">
                                        Forgot password?
                                    </a>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button 
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log(isSignUp ? "Sign up" : "Sign in");
                                }}
                                className="group relative w-full overflow-hidden rounded-lg bg-white p-3 font-semibold text-black transition-all hover:bg-gray-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                            >
                                <span className="relative z-10">
                                    {isSignUp ? "Create Account" : "Sign In"}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-transparent opacity-0 transition-opacity group-hover:opacity-50"></div>
                            </button>

                            {/* Divider */}
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-700"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="bg-gray-900 px-4 text-gray-400">or</span>
                                </div>
                            </div>

                            {/* Toggle Button */}
                            <button 
                                onClick={() => setIsSignUp((prev) => !prev)}
                                className="w-full rounded-lg border border-gray-700 bg-black/20 py-3 text-center font-medium text-gray-300 transition-all hover:bg-black/40 hover:text-white hover:border-gray-600"
                            >
                                {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                            </button>

                            {/* Benefits for Sign Up */}
                            {isSignUp && (
                                <div className="rounded-lg border border-gray-700 bg-gray-800/30 p-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white mb-2">What you'll get:</h4>
                                            <ul className="space-y-1 text-sm text-gray-300">
                                                <li className="flex items-center space-x-2">
                                                    <span className="w-1 h-1 bg-white rounded-full"></span>
                                                    <span>AI-curated content just for you</span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <span className="w-1 h-1 bg-white rounded-full"></span>
                                                    <span>Early access to new features</span>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                    <span className="w-1 h-1 bg-white rounded-full"></span>
                                                    <span>Personalized recommendations</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center text-sm text-gray-500">
                        By continuing, you agree to our{" "}
                        <a href="#" className="text-white hover:text-gray-300 transition-colors underline">Terms</a>
                        {" "}and{" "}
                        <a href="#" className="text-white hover:text-gray-300 transition-colors underline">Privacy Policy</a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .animate-pulse {
                    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .animate-bounce {
                    animation: bounce 3s infinite;
                }
                @keyframes pulse {
                    0%, 100% {
                        opacity: 0.1;
                    }
                    50% {
                        opacity: 0.3;
                    }
                }
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(0);
                        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                    }
                    50% {
                        transform: translateY(-10px);
                        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                    }
                }
            `}</style>
        </div>
    );
}