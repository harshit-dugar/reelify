"use client"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"


function Header() {
    const {data: session} = useSession()

    const handleSignOut = async () =>{
        try {
            await signOut();
        } catch (error) {
            console.log(error);            
        }
    }
    return (
        <div>
            <button onClick={handleSignOut}>Sign out</button>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
        </div>
    )
}

export default Header