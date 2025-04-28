"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import home from "../public/home-display.jpeg";

export default function Home() {
  const {data: session} = useSession()

  return (
    <div className=''>
      {session ? 
      (<div>

      </div>) : (
      <div className='flex flex-row items-center justify-around h-screen'>
        <div className="m-2">
          <Image src={home} width={300} height={400} alt="Logo" className="rounded-2xl"/>
        </div>

        <div className="flex flex-col items-center justify-center mt-4">
          <Link href="/login" prefetch={false} className="bg-amber-50 text-gray-900 text-3xl p-3 m-2 rounded-2xl hover:bg-gray-950 hover:text-amber-50 transition-all">Login</Link>
          <Link href="/register" className="bg-amber-50 text-gray-900 text-3xl p-3 m-2 rounded-2xl hover:bg-gray-950 hover:text-amber-50 transition-all">Register</Link>
        </div>
      </div>
      )}
    </div>
  );
}
