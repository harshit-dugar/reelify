"use client"
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

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
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className='text-red-500'>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login