import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Heart, MessageCircle, Share, TrendingUp, Eye, Users } from "lucide-react";
import Demo1 from "./../../public/demo1.jpeg"
import Demo2 from "./../../public/demo2.jpeg"
import Demo3 from "./../../public/demo3.jpeg"
import Image from "next/image";
import AnimatedFadeUp from "./motions/FadeUp";

function DashPreview() {
  const mockReels = [
    { id: 1, title: "Sunset Vibes", views: "12.5K", likes: "2.1K", creator: "Alice",image:Demo1},
    { id: 2, title: "Urban Dance", views: "8.7K", likes: "1.5K", creator: "Bob",image:Demo2 },
    { id: 3, title: "Nature Walk", views: "15.2K", likes: "3.2K", creator: "Carol",image:Demo3 },
  ];

  return (
    <section className="py-20 px-4 relative bg-gradient-to-b from-black/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your Creative Board
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Dashboard</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Manage your content, track performance, and engage with your audience - all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Analytics Cards */}
          <Card className="p-6 bg-gradient-to-br from-purple-600/20 to-black/40 border-purple-500/30 backdrop-blur-sm animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-300 text-sm">Total Views</p>
                <p className="text-3xl font-bold text-white">2.4M</p>
              </div>
              <Eye className="w-8 h-8 text-purple-400" />
            </div>
            <div className="flex items-center text-green-400 text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12% from last month
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-pink-600/20 to-black/40 border-purple-500/30 backdrop-blur-sm animate-fade-in delay-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-300 text-sm">Followers</p>
                <p className="text-3xl font-bold text-white">48.2K</p>
              </div>
              <Users className="w-8 h-8 text-pink-400" />
            </div>
            <div className="flex items-center text-green-400 text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              +8% from last week
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-800/20 to-black/40 border-purple-500/30 backdrop-blur-sm animate-fade-in delay-400">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-300 text-sm">Earnings</p>
                <p className="text-3xl font-bold text-white">$1,240</p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-300" />
            </div>
            <div className="flex items-center text-green-400 text-sm">
              +24% from last month
            </div>
          </Card>
        </div>

        {/* Mock Dashboard Interface */}
        <div className="bg-black/20 backdrop-blur-sm rounded-3xl border border-purple-500/20 p-8 animate-fade-in delay-600">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Your Recent Reels</h3>
              <p className="text-gray-300">Manage and track your content performance</p>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white mt-4 md:mt-0">
              Upload New Reel
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockReels.map((reel, index) => (
              <AnimatedFadeUp key={reel.id} delay={index * 0.2}>
                {/* Reel Card */}
              <div 
                key={reel.id}
                className="group bg-black/20 rounded-2xl border border-purple-500/20 overflow-hidden hover:bg-purple-900/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${800 + index * 200}ms` }}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video overflow-hidden flex items-center justify-center">
                  <Image src={reel.image} alt={reel.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-3 right-3 bg-black/50 rounded-full px-2 py-1 text-xs text-white">
                    {reel.views}
                  </div>
                </div>

                {/* Content Info */}
                <div className="p-4">
                  <h4 className="font-semibold text-white mb-2">{reel.title}</h4>
                  <p className="text-gray-400 text-sm mb-3">by {reel.creator}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs">{reel.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-xs">123</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share className="w-4 h-4" />
                        <span className="text-xs">45</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </AnimatedFadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashPreview