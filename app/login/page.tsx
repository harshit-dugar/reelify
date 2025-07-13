"use client"
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Footer from '../components/Footer'

function Login() {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState("")

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            })
            if (!res?.ok) {
                alert("Invalid credentials")
                throw new Error("Invalid credentials")
            }else {
                alert("Login successful")
                // Handle successful login (e.g., redirect to dashboard)
                router.push("/dashboard")
            }
        } catch (error) {
            console.error("Login error:", error)
        }
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className='text-3xl mb-5'>Login</h1>
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
                {error && <p className='text-red-500'>{error}</p>}
                <button type="submit" className=''>Login</button>
            </form>
            <p className='mt-4'>
                Don&apos;t have an account? <a href="/register" className='text-blue-500 hover:underline'>Register</a>
            </p>
            <Footer />
        </div>
    )
}

export default Login