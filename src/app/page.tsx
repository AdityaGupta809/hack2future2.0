'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function HackathonPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [stars, setStars] = useState<Array<{
    id: number;
    top: number;
    left: number;
    size: number;
    delay: number;
    duration: number;
  }>>([])

  useEffect(() => {
    setStars(
      Array.from({ length: 100 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 3,
        duration: Math.random() * 3 + 2
      }))
    )
  }, [])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  const prizes = [
    { 
      place: '1st Prize', 
      amount: '₹50,000',
      rank: '1st'
    },
    { 
      place: '2nd Prize', 
      amount: '₹30,000',
      rank: '2nd'
    },
    { 
      place: '3rd Prize', 
      amount: '₹20,000',
      rank: '3rd'
    }
  ]

  const faqs = [
    {
      question: 'Who can participate in Hack 2 Future 2.0?',
      answer: 'Students from all years and disciplines (CS, Design, Cyber Security, Business, Communications) are welcome to participate. Teams can have up to 4 members.'
    },
    {
      question: 'Do I need to have a team before registering?',
      answer: 'While having a team is recommended, you can also register individually. We will have team formation sessions before the hackathon starts.'
    },
    {
      question: 'What should I bring to the hackathon?',
      answer: 'Bring your laptop, chargers, and any hardware you plan to use. We will provide internet, workspace, meals, and refreshments throughout the 36 hours.'
    },
    {
      question: 'Is there any registration fee?',
      answer: 'No, participation in Hack 2 Future 2.0 is completely free for all registered participants.'
    },
    {
      question: 'Will there be mentors available during the hackathon?',
      answer: 'Yes! Industry experts and experienced mentors will be available throughout the event to guide you and help solve technical challenges.'
    },
    {
      question: 'What are the judging criteria?',
      answer: 'Projects will be evaluated based on innovation, technical implementation, design, feasibility, and potential impact.'
    }
  ]

  const sponsors = [
    { tier: 'Platinum', name: 'Coming Soon' },
    { tier: 'Gold', name: 'Coming Soon' },
    { tier: 'Silver', name: 'Coming Soon' }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 0%, #0a1628 0%, #020817 40%, #000000 100%)'
          }}
        />

        {/* Stars */}
        <div className="absolute inset-0 overflow-hidden">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: 0.6,
                animation: `twinkle ${star.duration}s infinite ease-in-out alternate`,
                animationDelay: `${star.delay}s`
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs - Blue theme */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-[100px] animate-pulse delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="container mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >

              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
                style={{
                  fontFamily: 'var(--font-orbitron, system-ui, sans-serif)',
                  background: 'linear-gradient(to right, #ffffff, #3b82f6, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 40px rgba(59, 130, 246, 0.3)'
                }}
              >
                HACK2FUTURE 2.0
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide max-w-3xl mx-auto"
              >
                Hack the <span className="text-blue-400 font-bold">Present</span>, 
                Shape the <span className="text-cyan-400 font-bold">Future</span>
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-16"
              >
                {[
                  { label: '36 Hours', sublabel: 'Non-stop Coding', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                  { label: '2000+', sublabel: 'Expected Reach', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                  { label: '30 Teams', sublabel: 'Selected Finalists', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="backdrop-blur-xl bg-white/5 border border-blue-500/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all"
                  >
                    <svg className="w-12 h-12 mx-auto mb-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                    </svg>
                    <div className="text-3xl font-bold text-white mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-400">{stat.sublabel}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  About the Event
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="backdrop-blur-2xl bg-white/5 border border-blue-500/20 shadow-2xl hover:border-cyan-400/30 transition-all">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg mb-6">
                          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          IIIT Dharwad
                        </div>
                        <p className="text-gray-200 text-lg leading-relaxed">
                          An <span className="text-cyan-400 font-semibold">Institute of National Importance</span> established in 2015 under a Public-Private Partnership. We bridge the high-end IT skill gap and support India's global leadership with BTech programs in CSE, ECE, and DSAI.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <div className="backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-blue-400/10 rounded-xl p-6">
                          <svg className="w-10 h-10 mb-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <h3 className="text-xl font-bold text-white mb-2">Innovation Hub</h3>
                          <p className="text-gray-300 text-sm">A strategic education hub in Hubballi-Dharwad fostering next-gen innovators</p>
                        </div>
                        <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/10 rounded-xl p-6">
                          <svg className="w-10 h-10 mb-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <h3 className="text-xl font-bold text-white mb-2">Industry Connect</h3>
                          <p className="text-gray-300 text-sm">Bridging academia and industry to create future-ready professionals</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mt-8">
                <Card className="backdrop-blur-2xl bg-white/5 border border-blue-500/20 hover:border-cyan-400/30 transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 text-cyan-400 font-bold text-lg mb-6">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      Diverse Participation
                    </div>
                    <p className="text-gray-300 mb-6">
                      From freshers to final years across multiple disciplines
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Computer Science', 'Design', 'Cyber Security', 'Business', 'Communications'].map((tag) => (
                        <Badge key={tag} className="bg-cyan-400/10 text-cyan-400 border-cyan-400/20 hover:bg-cyan-400/20 transition-colors px-4 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-2xl bg-white/5 border border-blue-500/20 hover:border-cyan-400/30 transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 text-blue-400 font-bold text-lg mb-6">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Team Formation
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-200">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span>30 Teams Shortlisted for Finals</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-200">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span>Up to 4 Members per Team</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-200">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span>Cross-Disciplinary Collaboration</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Prizes Section */}
        <section id="prizes" className="py-24 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Prizes & Rewards
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
                <p className="text-gray-300 text-xl mt-6">Compete for amazing prizes and recognition</p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {prizes.map((prize, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className={`backdrop-blur-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border-2 border-cyan-400/30 shadow-2xl hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] transition-all ${index === 0 ? 'md:-mt-4 border-cyan-300/50' : ''}`}>
                      <CardContent className="p-10 text-center relative">
                        {index === 0 && (
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-1 rounded-full text-sm font-bold">
                            WINNER
                          </div>
                        )}
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                          <span className="text-3xl font-black text-white">{prize.rank}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{prize.place}</h3>
                        <div className="text-5xl font-black mb-6 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                          {prize.amount}
                        </div>
                        <div className="space-y-2 text-gray-300">
                          <div className="flex items-center justify-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                            <span>Certificate of Achievement</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                            <span>Goodies & Swag</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                            <span>Mentorship Opportunities</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="mt-12 text-center">
                <Card className="backdrop-blur-2xl bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-cyan-400/20 inline-block">
                  <CardContent className="p-6">
                    <p className="text-xl text-gray-200">
                      <span className="text-cyan-400 font-bold">Plus:</span> Special category prizes, sponsor awards, and exclusive opportunities
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Event Timeline
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
              </motion.div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-400" />

                <div className="space-y-12">
                  {[
                    { 
                      phase: 'Phase 1', 
                      title: 'Registration Opens', 
                      date: 'Coming Soon', 
                      desc: 'Team registration opens for all participants. Form your teams and submit your applications.',
                      number: '01'
                    },
                    { 
                      phase: 'Phase 2', 
                      title: 'Shortlisting & Announcement', 
                      date: 'TBD', 
                      desc: 'Top 30 teams will be selected based on their project ideas and team composition.',
                      number: '02'
                    },
                    { 
                      phase: 'Phase 3', 
                      title: '36-Hour Hackathon Begins', 
                      date: 'TBD', 
                      desc: 'Intense coding marathon! Build, iterate, and create innovative solutions with mentor support.',
                      number: '03'
                    },
                    { 
                      phase: 'Phase 4', 
                      title: 'Final Presentations & Judging', 
                      date: 'TBD', 
                      desc: 'Present your projects to industry experts and compete for amazing prizes.',
                      number: '04'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                    >
                      {/* Timeline Node */}
                      <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-xl font-black text-white shadow-lg z-10 border-4 border-black">
                        {item.number}
                      </div>

                      {/* Content Card */}
                      <div className={`w-full md:w-[calc(50%-4rem)] ${index % 2 === 0 ? 'md:pr-16 pl-24 md:pl-0' : 'md:pl-16 pl-24 md:pl-0'}`}>
                        <Card className="backdrop-blur-2xl bg-white/5 border border-blue-500/20 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                              <Badge className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-0 px-3 py-1">
                                {item.phase}
                              </Badge>
                              <span className="text-cyan-400 text-sm font-semibold">{item.date}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Our Sponsors
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
                <p className="text-gray-300 text-xl mt-6">Powered by industry leaders</p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="backdrop-blur-2xl bg-white/5 border border-blue-500/20 mb-8">
                  <CardContent className="p-10">
                    <div className="flex items-center gap-4 text-cyan-400 font-bold text-xl mb-8">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      Why Sponsor Us?
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { title: 'Brand Exposure', desc: '2000+ tech enthusiasts', icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z' },
                        { title: 'Talent Pipeline', desc: 'Access to top innovators', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                        { title: 'Networking', desc: 'Connect with academia', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                        { title: 'Innovation', desc: 'Shape problem statements', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' }
                      ].map((benefit, index) => (
                        <div key={index} className="text-center p-4 rounded-xl bg-white/5 border border-blue-500/20 hover:border-cyan-400/30 transition-all">
                          <svg className="w-12 h-12 mx-auto mb-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                          </svg>
                          <h4 className="text-white font-bold mb-2">{benefit.title}</h4>
                          <p className="text-gray-400 text-sm">{benefit.desc}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {sponsors.map((sponsor, index) => (
                  <motion.div key={index} variants={scaleIn}>
                    <Card className="backdrop-blur-2xl bg-white/5 border-2 border-cyan-400/30 hover:scale-105 transition-transform">
                      <CardContent className="p-12 text-center">
                        <div className="text-sm font-bold mb-4 text-cyan-400">
                          {sponsor.tier.toUpperCase()}
                        </div>
                        <div className="h-32 flex items-center justify-center mb-4">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border-2 border-cyan-400/30 flex items-center justify-center">
                            <span className="text-2xl font-bold text-cyan-400">{sponsor.tier[0]}</span>
                          </div>
                        </div>
                        <p className="text-gray-400">{sponsor.name}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="mt-12 text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-6 text-lg font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                >
                  Become a Sponsor
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  FAQ
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
                <p className="text-gray-300 text-xl mt-6">Got questions? We've got answers</p>
              </motion.div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card 
                      className={`backdrop-blur-2xl bg-white/5 border border-blue-500/20 hover:border-cyan-400/30 transition-all cursor-pointer ${openFaq === index ? 'border-cyan-400/50' : ''}`}
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-bold text-white pr-4">{faq.question}</h3>
                          <motion.div
                            animate={{ rotate: openFaq === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </motion.div>
                        </div>
                        <motion.div
                          initial={false}
                          animate={{
                            height: openFaq === index ? 'auto' : 0,
                            opacity: openFaq === index ? 1 : 0,
                            marginTop: openFaq === index ? 16 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
            >
              <Card className="backdrop-blur-2xl bg-gradient-to-br from-blue-500/20 via-cyan-400/20 to-blue-600/20 border-2 border-cyan-400/30 shadow-[0_0_60px_rgba(6,182,212,0.3)]">
                <CardContent className="p-12 md:p-16 text-center">
                  <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-orbitron, system-ui, sans-serif)' }}>
                    Ready to Shape the Future?
                  </h2>
                  <p className="text-gray-200 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                    Join us for 36 hours of innovation, collaboration, and groundbreaking solutions. 
                    Transform your ideas into reality and compete with the best!
                  </p>
                  <div className="flex flex-wrap gap-6 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-14 py-8 text-2xl font-black rounded-full hover:scale-110 transition-transform shadow-[0_0_50px_rgba(59,130,246,0.6)] hover:shadow-[0_0_70px_rgba(59,130,246,0.8)]"
                    >
                      REGISTER NOW
                      <svg className="w-8 h-8 ml-3 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Button>
                  </div>
                  <p className="text-gray-400 mt-8 text-sm">
                    Limited spots available • First come, first served
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 border-t border-blue-500/20">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-black text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Hack 2 Future 2.0
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  India's premier student hackathon bringing together the brightest minds to hack the present and shape the future.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                <div className="space-y-2">
                  {['About', 'Prizes', 'Timeline', 'Sponsors', 'FAQ'].map((link) => (
                    <a 
                      key={link}
                      href={`#${link.toLowerCase()}`} 
                      className="block text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">Hackathon@iiitdwd.ac.in</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div className="text-sm">
                      <p>Prajin (Technical Secy)</p>
                      <p className="text-cyan-400">9789880949</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div className="text-sm">
                      <p>Prem (Organizer)</p>
                      <p className="text-cyan-400">8489889568</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="bg-blue-500/20 mb-8" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">
                © 2024 Hack 2 Future 2.0 • IIIT Dharwad • All rights reserved
              </p>
              <div className="flex gap-6">
                {[
                  { icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', label: 'GitHub' },
                  { icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', label: 'Twitter' },
                  { icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z', label: 'LinkedIn' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label={social.label}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes twinkle {
          0% { opacity: 0.3; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.2); }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}