import React from 'react'
import { Zap, TrendingUp, Users, ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'

const Landingpage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/10 border-b border-purple-400/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-black tracking-tighter">
              HABIT <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">FORGE</span>
            </h1>
          

          <Button>Login</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl -z-10"></div>
          
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Forge your habits,
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                shape your future
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              The habit tracker that shows you with undeniable clarity who you're becoming
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg">Get Started</Button>
              <button className="px-8 py-3 rounded-full border-2 border-purple-400/50 hover:border-purple-400 hover:bg-purple-400/10 font-bold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="py-16 bg-white/5 backdrop-blur-sm border-y border-purple-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 hover:border-purple-400/60 transition-all">
              <div className="text-4xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                1000+
              </div>
              <p className="text-gray-300">Users Worldwide</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 hover:border-purple-400/60 transition-all">
              <div className="text-4xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                50K+
              </div>
              <p className="text-gray-300">Habits Tracked</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 hover:border-purple-400/60 transition-all">
              <div className="text-4xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                98%
              </div>
              <p className="text-gray-300">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Powerful Features</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-400/30 hover:border-purple-400/60 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">Visualize Progress</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              Visualize your habits with stunning charts and real-time analytics
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-400/30 hover:border-purple-400/60 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Goals</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              Set intelligent goals and track your progress effortlessly
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-400/30 hover:border-purple-400/60 hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/10 transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3">Community</h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              Join a supportive community of habit builders worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-purple-400/20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <h1 className="text-xl font-black">
              HABIT <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">FORGE</span>
            </h1>
            <p className="text-gray-400 text-center md:text-right">
              &copy; 2024 Habit Forge. Shape your future, one habit at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landingpage
