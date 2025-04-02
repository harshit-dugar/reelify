"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

function Home() {
    const {data: session} = useSession()

    return (
        <div className=''>
            {session ? 
            (<div>

            </div>) : (
            <div>

            </div>
            )}
        </div>
    )
}

export default Home