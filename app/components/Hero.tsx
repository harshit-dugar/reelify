import { Button } from "@/components/ui/button"
import { Shield, Users, Zap } from "lucide-react"
import AnimatedCounter from "./motions/AnimatedCounter"

function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          The Future of
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Decentralized Video Content
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in delay-300">
          Create, share, and monetize your reels on a platform that puts creators first. 
          Own your content, control your data, and earn without intermediaries.
        </p>

        {/* Key features pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in delay-500">
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/30">
            <Shield className="w-4 h-4 mr-2 text-green-400" />
            <span className="text-sm">Fully Decentralized</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/30">
            <Users className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm">Creator Owned</span>
          </div>
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/30">
            <Zap className="w-4 h-4 mr-2 text-pink-400" />
            <span className="text-sm">Instant Rewards</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
          <Button
            size="lg" 
            className="bg-gradient-to-r from-violet-600 to-pink-700 hover:from-violet-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 cursor-grab"
          >
            Launch Dashboard
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in delay-1000">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">
              <AnimatedCounter targetNumber={10000} />
            </div>
            <div className="text-gray-400">Active Creators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">
              <AnimatedCounter targetNumber={100000} />
            </div>
            <div className="text-gray-400">Reels Shared</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">
              $<AnimatedCounter targetNumber={10000} />
            </div>
            <div className="text-gray-400">Creator Earnings</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero