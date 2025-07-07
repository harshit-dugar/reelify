"use client"

import Footer from "../components/Footer"
import Navbar from "../components/Navbar/Navbar"

export default function ComingSoonDash (){
    return(
        <div className="h-screen flex flex-col ">
            <Navbar />
            <div className="flex flex-col items-center justify-center px-4 min-h-screen">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
                </div>

                <div className="flex justify-center items-center flex-col">
                <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
                <p className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-pulse text-2xl">This feature is under development. Stay tuned!</p>
                <p className="text-gray-100 font-bold text-xl mt-2">We are working hard to bring you new features. Check back later!</p>
                <p className="text-gray-400 text-xl mt-2">In the meantime, feel free to explore our Video Section By clicking on Get Started.</p>
                
                </div>
            </div>
            <Footer />
        </div>
    )
}