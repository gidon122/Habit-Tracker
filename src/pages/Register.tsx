import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const Register: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const validate = () => {
    if (!name.trim()) {
      setError('Please enter your name')
      return false
    }
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return false
    }
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters')
      return false
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return false
    }
    setError(null)
    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSuccess(null)
    if (!validate()) return
    setLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 900))
      // Simulate user creation and auto-login
      const user = { name, email }
      localStorage.setItem('hf_user', JSON.stringify(user))
      setSuccess('Account created — you are now signed in')
      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/5 border border-purple-400/20 rounded-2xl p-8 space-y-6 backdrop-blur-sm"
        aria-labelledby="register"
      >
        <div>
          <h2 id="register" className="text-2xl font-black text-white">
            Create your account
            <span className="block text-sm text-gray-300 mt-1">Join Habit Forge and start your streak.</span>
          </h2>
        </div>

        {error && <div className="text-sm text-red-400">{error}</div>}
        {success && <div className="text-sm text-green-400">{success}</div>}

        <div>
          <label className="block text-gray-300 text-xs mb-2">Full name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-lg bg-white/3 text-white placeholder-gray-400 outline-none border border-transparent focus:border-purple-400/60 transition"
            autoComplete="name"
          />
        </div>

        <div>
          <label className="block text-gray-300 text-xs mb-2">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg bg-white/3 text-white placeholder-gray-400 outline-none border border-transparent focus:border-purple-400/60 transition"
            autoComplete="email"
          />
        </div>

        <div>
          <label className="block text-gray-300 text-xs mb-2">Password</label>
          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-lg bg-white/3 text-white placeholder-gray-400 outline-none border border-transparent focus:border-purple-400/60 transition pr-12"
              autoComplete="new-password"
            />
            <button
              type="button"
              aria-pressed={showPassword}
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-200 hover:text-white"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-gray-300 text-xs mb-2">Confirm password</label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            placeholder="Repeat your password"
            className="w-full px-4 py-3 rounded-lg bg-white/3 text-white placeholder-gray-400 outline-none border border-transparent focus:border-purple-400/60 transition"
            autoComplete="new-password"
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex-1 border-t border-purple-400/20" />
          <span className="text-gray-400">or</span>
          <div className="flex-1 border-t border-purple-400/20" />
        </div>

        <div className="text-center text-sm text-gray-300">
          Already have an account? <button type="button" className="text-purple-300 hover:underline">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Register
