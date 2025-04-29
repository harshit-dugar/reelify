/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function Register() {
    const router = useRouter();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return
        }

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })
            const data = await res.json()
            if (!res.ok) {
                throw new Error("Failed to register")
            }
            router.push("/login")
            // Handle successful registration (e.g., redirect to login page)
        } catch (error) {
            console.error("Registration error:", error)
        }
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className='text-3xl mb-5'>Register</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input
                    className='border-2 border-gray-300 p-2 rounded hover:border-gray-500 mb-2'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className='border-2 border-gray-300 p-2 rounded hover:border-gray-500 mb-2'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    className='border-2 border-gray-300 p-2 rounded hover:border-gray-500 mb-2'            
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register