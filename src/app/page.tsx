'use client';
import { motion } from 'framer-motion';
import { Mic, Zap, BarChart3, ArrowRight, CheckCircle2, Users, Target, Sparkles } from 'lucide-react';
import Link from 'next/link';

const fadeIn = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } };
const stagger = { animate: { transition: { staggerChildren: 0.1 } } };

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fadeIn} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700">
              <Sparkles className="w-4 h-4" /> AI Sales Coach — 20% more closes
            </span>
          </motion.div>

          <motion.h1 
            {...fadeIn} 
            transition={{ duration: 0.8 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Master Every Pitch.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
              Close Every Deal.
            </span>
          </motion.h1>

          <motion.p 
            {...fadeIn} 
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-slate-600 mb-10 max-w-4xl mx-auto"
          >
            AI listens, scores, and coaches — in real time. No fluff. Just results.
          </motion.p>

          <motion.div 
            {...fadeIn} 
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/api/create-checkout"
              className="group inline-flex items-center px-8 py-5 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Free Pilot
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="inline-flex items-center px-8 py-5 text-lg font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-lg transition-all">
              Watch 60s Demo
            </button>
          </motion.div>

          <motion.div 
            {...fadeIn} 
            transition={{ delay: 0.6 }}
            className="mt-16 flex items-center justify-center gap-8 text-sm text-slate-500"
          >
            {['No credit card', 'Cancel anytime', '7-day pilot'].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Built for High-Performers
            </h2>
            <p className="text-xl text-slate-600">Every tool you need. Nothing you don’t.</p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: "Real-Time Voice AI",
                desc: "Analyzes tone, pace, fillers. Scores 1–10. Gives instant feedback.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Target,
                title: "Objection Rebuttals",
                desc: "AI generates proven responses to 50+ common objections.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: BarChart3,
                title: "Close Rate Dashboard",
                desc: "Track team lift. Export data. See ROI in real time.",
                gradient: "from-emerald-500 to-teal-500"
              }
            ].map((f, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group relative p-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl border border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${f.gradient} text-white mb-6`}>
                  <f.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <p className="text-sm uppercase tracking-wider text-slate-500 mb-8">TRUSTED BY</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale">
              {['Stripe', 'Vercel', 'Notion', 'Linear', 'Ramp'].map((name) => (
                <div key={name} className="text-2xl font-bold text-slate-700">{name}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2 {...fadeIn} className="text-5xl font-bold text-white mb-6">
            Your Team’s Unfair Advantage
          </motion.h2>
          <motion.p {...fadeIn} transition={{ delay: 0.2 }} className="text-xl text-blue-100 mb-10">
            Join 500+ sales teams closing 20% more with AI.
          </motion.p>
          <motion.div {...fadeIn} transition={{ delay: 0.4 }}>
            <Link
              href="/api/create-checkout"
              className="inline-flex items-center px-10 py-6 text-xl font-bold text-indigo-600 bg-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Free Pilot <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">DM</div>
            <span className="text-xl font-bold text-white">DealMentor.io</span>
          </div>
          <p className="text-sm">© 2025 DealMentor. AI Sales Coach. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
