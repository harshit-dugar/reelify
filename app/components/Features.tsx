
import { Shield, Coins, Users, Zap, Lock, Globe } from "lucide-react";

const features = [
    {
      icon: Shield,
      title: "Fully Decentralized",
      description: "No central authority controls your content. Built on blockchain for true ownership and censorship resistance.",
      color: "text-green-400"
    },
    {
      icon: Coins,
      title: "Direct Monetization",
      description: "Earn directly from your audience without platform fees. Smart contracts ensure instant and transparent payments.",
      color: "text-yellow-400"
    },
    {
      icon: Users,
      title: "Community Governed",
      description: "Platform decisions are made by the community through decentralized governance. Your voice matters.",
      color: "text-purple-400"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with cutting-edge blockchain technology. Upload and share instantly.",
      color: "text-pink-400"
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your data belongs to you. No tracking, no surveillance, no unauthorized data collection.",
      color: "text-purple-300"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Accessible worldwide without restrictions. Connect with creators and audiences globally.",
      color: "text-cyan-400"
    }
  ];
function Features() {
  
  return (
    <div className="py-20 px-4 relative bg-gradient-to-b from-transparent to-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Decentralized?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Experience the freedom of true ownership and control over your creative content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeaturesList />
        </div>
      </div>
    </div>
  )
}

function FeaturesList(){
  return(
    <>
    {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:bg-purple-900/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
    </>
  )
}

export default Features