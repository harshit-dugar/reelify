"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import home from "../public/home-display.jpeg";
import Dashboard from "./dashboard/page";

export default function Home() {
  const {data: session} = useSession()

  return (
    <div className=''>
      {session ? 
      (<div>
        <Dashboard />
      </div>) : (
      <div className='flex flex-row items-center justify-around h-screen'>
        <div className="m-2">
          <Image src={home} width={300} height={400} alt="Logo" className="rounded-2xl"/>
        </div>

        <div className="flex flex-col items-center justify-center mt-4">
          <div className="flex flex-col items-center justify-center mb-8">
            <h1 className="text-5xl text-white font-bold mb-4">Welcome to the Reelify</h1>
            <p className="text-lg text-white mb-8">Your one-stop video app.</p>
          </div>
          <Link href="/login" prefetch={false} className="bg-amber-50 text-gray-900 text-2xl p-3 m-2 hover:bg-neutral-900 hover:text-amber-50 transition-all hover:border-[1px]">Login</Link>
          <Link href="/register" className="bg-amber-50 text-gray-900 text-2xl p-3 m-2 hover:bg-neutral-900 hover:text-amber-50 transition-all hover:border-[1px]">Register</Link>
        </div>
      </div>
      )}
    </div>
  );
}
