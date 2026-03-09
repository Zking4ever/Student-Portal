/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Lock, User, ArrowRight, Heart, Sparkles, BookOpen } from 'lucide-react';

type UserRole = 'student' | 'teacher';

export default function App() {
  const [role, setRole] = useState<UserRole>('student');
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Logging in as ${role}:`, { idNumber, password });
  };

  return (
    <main className="h-screen w-full flex overflow-hidden bg-[#fdfcfb] font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Left Side: Immersive Image */}
      <div className="hidden lg:block lg:w-1/2 h-full relative overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=2070"
            alt="Warm library with books"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Warm Overlay */}
          <div className="absolute inset-0 bg-stone-900/20 backdrop-sepia-[0.2]" />
        </motion.div>
        
        {/* Floating Quote/Branding on Image */}
        <div className="absolute inset-0 flex flex-col justify-between p-16 text-white z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
              <BookOpen size={20} />
            </div>
            <span className="font-serif italic text-xl tracking-tight">EduPortal</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-md"
          >
            <h2 className="font-serif text-5xl leading-tight mb-6">
              The journey of a thousand miles begins with a <span className="italic">single page.</span>
            </h2>
            <div className="h-px w-12 bg-white/50 mb-6" />
            <p className="text-white/80 font-medium tracking-wide uppercase text-xs">
              Welcome to our community of learners
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 h-full flex flex-col relative overflow-y-auto lg:overflow-hidden">
        {/* Mobile Header (Visible only on small screens) */}
        <div className="lg:hidden p-8 pb-0 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center">
            <BookOpen size={16} />
          </div>
          <span className="font-serif italic text-lg text-stone-800">EduPortal</span>
        </div>

        <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[420px]"
          >
            {/* Humanistic Header */}
            <div className="mb-6">
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-50 text-orange-700 mb-4"
              >
                <Heart size={20} fill="currentColor" className="opacity-20 absolute" />
                <GraduationCap size={18} className="relative z-10" />
              </motion.div>
              <h1 className="font-serif text-3xl text-stone-800 tracking-tight mb-2">
                Sign in to your <span className="italic text-orange-800">Space</span>
              </h1>
              <p className="text-stone-500 text-sm font-medium leading-relaxed">
                Enter your credentials to access your personalized learning environment.
              </p>
            </div>

            {/* Organic Tabs */}
            <div className="flex p-1 bg-stone-50/80 rounded-xl mb-6 border border-stone-100">
              <button
                onClick={() => setRole('student')}
                className={`flex-1 relative py-2.5 text-xs font-semibold transition-all duration-300 ${
                  role === 'student' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                <span className="relative z-10">Student</span>
                {role === 'student' && (
                  <motion.div
                    layoutId="splitTab"
                    className="absolute inset-0 bg-white rounded-lg shadow-sm border border-stone-200/40"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                )}
              </button>
              <button
                onClick={() => setRole('teacher')}
                className={`flex-1 relative py-2.5 text-xs font-semibold transition-all duration-300 ${
                  role === 'teacher' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'
                }`}
              >
                <span className="relative z-10">Teacher</span>
                {role === 'teacher' && (
                  <motion.div
                    layoutId="splitTab"
                    className="absolute inset-0 bg-white rounded-lg shadow-sm border border-stone-200/40"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                )}
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.form
                key={role}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase tracking-[0.2em] font-bold text-stone-400 ml-1" htmlFor="idNumber">
                    {role === 'student' ? 'Student Identity' : 'Teacher Identity'}
                  </label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-orange-600 transition-colors">
                      <User size={16} strokeWidth={1.5} />
                    </div>
                    <input
                      id="idNumber"
                      type="text"
                      required
                      placeholder={role === 'student' ? "ID Number" : "Staff ID"}
                      value={idNumber}
                      onChange={(e) => setIdNumber(e.target.value)}
                      className="w-full pl-11 pr-5 py-3 bg-stone-50/50 border border-stone-100 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-500/5 focus:bg-white focus:border-orange-200 transition-all placeholder:text-stone-300 text-stone-700 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-[9px] uppercase tracking-[0.2em] font-bold text-stone-400" htmlFor="password">
                      Secret Key
                    </label>
                  </div>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300 group-focus-within:text-orange-600 transition-colors">
                      <Lock size={16} strokeWidth={1.5} />
                    </div>
                    <input
                      id="password"
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-5 py-3 bg-stone-50/50 border border-stone-100 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-500/5 focus:bg-white focus:border-orange-200 transition-all placeholder:text-stone-300 text-stone-700 text-sm"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-stone-900 hover:bg-stone-800 text-white font-semibold py-3.5 rounded-lg shadow-lg shadow-stone-200 flex items-center justify-center gap-3 group transition-all active:scale-[0.98] text-sm"
                  >
                    Enter Portal
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="mt-4 text-center">
                    <button type="button" className="text-[10px] font-medium text-stone-400 hover:text-orange-700 transition-colors inline-flex items-center gap-2">
                      <Sparkles size={10} />
                      Forgot your credentials?
                    </button>
                  </div>
                </div>
              </motion.form>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Humanistic Footer */}
        <div className="p-8 border-t border-stone-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <button className="text-[10px] font-bold uppercase tracking-widest text-stone-300 hover:text-stone-500 transition-colors">Help</button>
            <button className="text-[10px] font-bold uppercase tracking-widest text-stone-300 hover:text-stone-500 transition-colors">Privacy</button>
          </div>
          <p className="text-stone-200 text-[9px] uppercase tracking-[0.2em] font-bold">
            &copy; 2024 EduPortal Systems
          </p>
        </div>
      </div>
    </main>
  );
}
