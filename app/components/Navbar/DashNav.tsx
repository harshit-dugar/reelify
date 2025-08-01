"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {signOut, useSession } from "next-auth/react";


function DashNav() {
    const [isMenuOpen,setMenuOpen] = useState(false)
    const {data: session} = useSession();

    const handleSignOut = async () =>{
        try {
            await signOut();
        } catch (error) {
            console.log(error);            
        }
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-blend-color  backdrop-blur-md border-b border-purple-500/20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Reelify
                </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
                <Link 
                href="/dashboard" 
                className="text-white hover:text-purple-300 transition-colors font-medium"
                >
                Home
                </Link>
                <Link 
                href="/comingsoondash" 
                className="text-white hover:text-purple-300 transition-colors font-medium"
                >
                Dashboard
                </Link>
            </div>

            {/* Desktop Get Started Button */}
            <div className="hidden md:block">
                {session ? (
                    <Button 
                        onClick={handleSignOut}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300 cursor-grab"
                    >
                    Sign Out
                    </Button>
                ):(
                    <Link href='/dashboard'>
                        <Button 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300 cursor-grab"
                        >
                        Get Started
                        </Button>
                    </Link>
                )}
                
                
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
                <button
                onClick={() => setMenuOpen(!isMenuOpen)}
                className="text-white hover:text-purple-300 transition-colors"
                >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-black/50 backdrop-blur-md rounded-lg mt-2">
                <Link
                    href="/dashboard"
                    className="block px-3 py-2 text-white hover:text-purple-300 hover:bg-purple-900/20 rounded-md transition-colors font-medium"
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </Link>
                <Link
                    href="/comingsoondash"
                    className="block px-3 py-2 text-white hover:text-purple-300 hover:bg-purple-900/20 rounded-md transition-colors font-medium"
                    onClick={() => setMenuOpen(false)}
                >
                    Dashboard
                </Link>
                <div className="px-3 py-2">
                    {session ?(
                        <Button 
                        onClick={handleSignOut}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 rounded-full cursor-grab"
                        >
                        Sign Out
                        </Button>
                    ):(
                        <Link href='/dashboard'>
                            <Button 
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 rounded-full"
                            onClick={() => setMenuOpen(false)}
                            >
                            Get Started
                            </Button>
                        </Link>
                    )}
                </div>
                </div>
            </div>
            )}
        </div>
        </nav>
    )
}

export default DashNav