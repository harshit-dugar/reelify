import { Play, Twitter, Github, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-purple-500/20 bg-gradient-to-b from-transparent to-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-xl mr-3">
                <Play className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ReelChain
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              The future of content creation - decentralized, secure, and creator-owned. 
              Join the revolution and take control of your creative journey.
            </p>
            <div className="flex space-x-4">
              <div className="bg-purple-900/20 backdrop-blur-sm rounded-full p-2 hover:bg-purple-800/30 border border-purple-500/30 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5 text-gray-300" />
              </div>
              <div className="bg-purple-900/20 backdrop-blur-sm rounded-full p-2 hover:bg-purple-800/30 border border-purple-500/30 transition-colors cursor-pointer">
                <Github className="w-5 h-5 text-gray-300" />
              </div>
              <div className="bg-purple-900/20 backdrop-blur-sm rounded-full p-2 hover:bg-purple-800/30 border border-purple-500/30 transition-colors cursor-pointer">
                <MessageCircle className="w-5 h-5 text-gray-300" />
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-purple-300 transition-colors cursor-pointer">Dashboard</li>
              <li className="hover:text-purple-300 transition-colors cursor-pointer">Upload</li>
              <li className="hover:text-purple-300 transition-colors cursor-pointer">Analytics</li>
              <li className="hover:text-purple-300 transition-colors cursor-pointer">Monetization</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-purple-300 transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-purple-300 transition-colors cursor-pointer">API</li>
              <li className="hover:text-purple-300 transition-colors cursor-pointer">Community</li>
              <li className="hover:text-purple-300 transition-colors cursor-pointer">Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 ReelChain. All rights reserved. Built on blockchain for true decentralization.
          </p>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <span className="hover:text-purple-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-purple-300 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-purple-300 transition-colors cursor-pointer">Whitepaper</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer