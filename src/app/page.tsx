'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export default function HackathonPage() {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 3,
    duration: Math.random() * 3 + 2
  }))

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'radial-gradient(circle at 50% 0%, #1a0b2e 0%, #050505 40%, #000000 100%)'
    }}>
      {/* Stars Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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

      {/* Planet Big */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: '-80px',
          right: '-80px',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle at 30% 30%, #4facfe 0%, #00f2fe 40%, transparent 70%)',
          opacity: 0.4,
          filter: 'blur(20px)',
          zIndex: 0
        }}
      />

      {/* Planet Small */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          bottom: '100px',
          left: '-60px',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle at 30% 30%, #667eea 0%, #764ba2 60%, transparent 80%)',
          opacity: 0.3,
          filter: 'blur(15px)',
          zIndex: 0
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Header */}
        <header className="text-center mb-12 md:mb-16">
          <p className="text-[#00F0FF] font-semibold tracking-[0.2em] text-sm md:text-base uppercase mb-4 animate-pulse">
            Sponsored by - Hack 2
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight" style={{
            fontFamily: 'var(--font-orbitron, system-ui, sans-serif)',
            background: 'linear-gradient(to right, #fff, #b0b0b0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
          }}>
            Hack 2 Future 2.0
          </h1>
          <div className="relative inline-block text-lg md:text-2xl text-gray-300 font-light tracking-wide">
            Hack the present, shape the Future
            <div className="w-16 h-0.5 bg-[#FF003C] mx-auto mt-2 shadow-[0_0_8px_#FF003C]" />
          </div>
        </header>

        {/* About Section */}
        <Card className="mb-8 md:mb-12 backdrop-blur-xl border border-white/10 bg-white/5 shadow-2xl">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 text-[#00F0FF] font-semibold uppercase tracking-wider text-base md:text-lg mb-4">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Host Institute: IIIT Dharwad
            </div>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed text-justify">
              An <span className="text-[#00F0FF] font-semibold">Institute of National Importance</span> established in 2015 under a Public-Private Partnership. We bridge the high-end IT skill gap and support India's global leadership with BTech programs in CSE, ECE, and DSAI. A strategic education hub in Hubballi-Dharwad.
            </p>
          </CardContent>
        </Card>

        {/* Key Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
          <Card className="backdrop-blur-xl border border-white/10 bg-white/3 text-center py-6 md:py-8">
            <CardContent className="p-4">
              <svg className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-[#7000FF] shadow-[0_0_10px_rgba(112,0,255,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2" style={{ fontFamily: 'var(--font-orbitron, system-ui, sans-serif)' }}>
                36
              </div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Hours</div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-xl border border-white/10 bg-white/3 text-center py-6 md:py-8">
            <CardContent className="p-4">
              <svg className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-[#7000FF] shadow-[0_0_10px_rgba(112,0,255,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2" style={{ fontFamily: 'var(--font-orbitron, system-ui, sans-serif)' }}>
                2000+
              </div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Est. Reach</div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-xl border border-white/10 bg-white/3 text-center py-6 md:py-8">
            <CardContent className="p-4">
              <svg className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-[#7000FF] shadow-[0_0_10px_rgba(112,0,255,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2" style={{ fontFamily: 'var(--font-orbitron, system-ui, sans-serif)' }}>
                30
              </div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Final Teams</div>
            </CardContent>
          </Card>
        </div>

        {/* Diversity & Teams */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <Card className="backdrop-blur-xl border border-white/10 bg-white/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-[#00F0FF] font-semibold uppercase tracking-wider text-sm md:text-base mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Galaxy of Talent
              </div>
              <p className="text-gray-300 text-sm md:text-base mb-4">
                Freshers to Final Years across disciplines:
              </p>
              <div className="flex flex-wrap gap-2">
                {['CS', 'Design', 'Cyber Security', 'Business', 'Comm.'].map((tag) => (
                  <Badge key={tag} className="bg-[#00F0FF]/10 text-[#00F0FF] border-[#00F0FF]/20 hover:bg-[#00F0FF]/20 transition-colors">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-xl border border-white/10 bg-white/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-[#00F0FF] font-semibold uppercase tracking-wider text-sm md:text-base mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Team Clusters
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-200">
                  <svg className="w-5 h-5 text-[#FF003C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm md:text-base">30 Teams Shortlisted</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <svg className="w-5 h-5 text-[#FF003C]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  <span className="text-sm md:text-base">Up to 4 members</span>
                </div>
                <p className="text-gray-400 text-xs md:text-sm mt-2">
                  Collaborative star clusters working on groundbreaking ideas.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sponsorship Benefits */}
        <Card className="mb-8 md:mb-12 backdrop-blur-xl border border-white/10 bg-white/5">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 text-[#00F0FF] font-semibold uppercase tracking-wider text-base md:text-lg mb-6">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Sponsorship Opportunities
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                  <span className="font-semibold text-white">Impact & Exposure</span>
                </div>
                <p className="text-gray-400 text-sm">Brand visibility to 2000+ tech enthusiasts</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <span className="font-semibold text-white">Brand Promotion</span>
                </div>
                <p className="text-gray-400 text-sm">Prime placement during the event</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span className="font-semibold text-white">Networking</span>
                </div>
                <p className="text-gray-400 text-sm">Connect with top talent & mentors</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold text-white">Involvement</span>
                </div>
                <p className="text-gray-400 text-sm">Mentoring & problem statements</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline Section */}
        <Card className="mb-8 md:mb-12 backdrop-blur-xl border border-white/10 bg-white/5">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 text-[#00F0FF] font-semibold uppercase tracking-wider text-base md:text-lg mb-6">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Event Timeline
            </div>
            <div className="space-y-6">
              {[
                { phase: 'Phase 1', title: 'Registration Opens', date: 'Coming Soon', desc: 'Team registration opens for all participants' },
                { phase: 'Phase 2', title: 'Shortlisting', date: 'TBD', desc: 'Top 30 teams will be selected for the hackathon' },
                { phase: 'Phase 3', title: '36-Hour Hackathon', date: 'TBD', desc: 'Intense coding, collaboration, and innovation' },
                { phase: 'Phase 4', title: 'Judging & Awards', date: 'TBD', desc: 'Present your ideas to industry experts' }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7000FF] to-[#FF003C] flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-[#00F0FF]/10 text-[#00F0FF] border-[#00F0FF]/20 text-xs">
                        {item.phase}
                      </Badge>
                      <span className="text-gray-400 text-sm">{item.date}</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Register CTA */}
        <Card className="mb-8 backdrop-blur-xl border border-white/10 bg-gradient-to-t from-[#7000FF]/10 to-transparent">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-orbitron, system-ui, sans-serif)' }}>
              Ready to Shape the Future?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us for 36 hours of innovation, collaboration, and groundbreaking solutions. Register your team today!
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#7000FF] to-[#FF003C] text-white px-12 py-6 text-lg font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,0,60,0.4)]"
              onClick={() => alert('Registration coming soon!')}
            >
              REGISTER NOW
            </Button>
          </CardContent>
        </Card>

        {/* Footer / Contact */}
        <footer className="text-center py-8 border-t border-white/10">
          <Separator className="mb-8 bg-white/10" />
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <svg className="w-5 h-5 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm md:text-base">Hackathon@iiitdwd.ac.in</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <svg className="w-5 h-5 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm md:text-base">Prajin (Technical Secy) - 9789880949</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300">
              <svg className="w-5 h-5 text-[#00F0FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm md:text-base">Prem (Organizer) - 8489889568</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            © 2024 Hack 2 Future 2.0. All rights reserved.
          </p>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0% { opacity: 0.3; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  )
}
