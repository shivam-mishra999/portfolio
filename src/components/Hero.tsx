import { Github, Linkedin, Mail, ArrowDown, Smartphone, Globe, Rocket, ShieldCheck, Code2, Sparkles, Zap, Layers, CheckCircle2, Users } from 'lucide-react';
import heroImg from '../assets/HeroImage.png';

function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/40 to-cyan-50/60 pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background Decorative Radial Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

      {/* Background Animated Gradient Orbs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-tr from-blue-400/30 to-indigo-500/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-200/20 via-sky-200/20 to-teal-100/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Intro Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left animate-fade-in">

            {/* Status Badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-blue-200/80 text-blue-800 text-xs sm:text-sm font-semibold mb-6 shadow-sm hover:shadow-md transition-all">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span>Available for React Native & React Developer Roles</span>
            </div> */}

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="whitespace-nowrap bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm">
                Shivam Mishra
              </span>
            </h1>

            {/* Role Title */}
            <div className="inline-block px-3.5 py-1 rounded-lg bg-blue-100/60 text-blue-900 font-bold text-lg sm:text-2xl mb-4 border border-blue-200/50">
              React Native Developer (Team Lead)
            </div>

            {/* Subtitle */}
            {/* <p className="text-lg sm:text-xl text-blue-800 font-medium mb-6 leading-relaxed">
              Crafting High-performance Mobile apps & Web solutions using React Native, React.js, and Next.js. Turning Ideas into Reality.
            </p> */}

            {/* Summary paragraph */}
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Hands-on experience in building, deploying, and maintaining production applications across iOS, Android, and Web. Specializing in real-time features, location tracking, geo-fencing, authentication, payments, push notifications, and end-to-end App store & Google Playstore releases.
            </p>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-8 text-xs sm:text-sm font-semibold text-gray-700">
              <div className="flex items-center gap-2 px-3.5 py-2 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all rounded-xl border border-gray-200/80 hover:border-blue-300">
                <Smartphone size={17} className="text-blue-600" />
                <span>React Native Mobile</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all rounded-xl border border-gray-200/80 hover:border-cyan-300">
                <Globe size={17} className="text-cyan-600" />
                <span>React.js & Next.js Web</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all rounded-xl border border-gray-200/80 hover:border-indigo-300">
                <Zap size={17} className="text-amber-500" />
                <span>Real-Time & Geo-Fencing</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all rounded-xl border border-gray-200/80 hover:border-green-300">
                <ShieldCheck size={17} className="text-green-600" />
                <span>Production Ready</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all rounded-xl border border-gray-200/80 hover:border-purple-300">
                <Rocket size={17} className="text-purple-600" />
                <span>App Store & Play Store</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all rounded-xl border border-gray-200/80 hover:border-indigo-300">
                <Users size={17} className="text-indigo-600" />
                <span>Team Leadership</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <button
                onClick={() => scrollToSection('#projects')}
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl border-b-4 border-indigo-900 hover:from-blue-700 hover:to-indigo-700 active:border-b-0 active:translate-y-1 transition-all duration-150 ease-out active:scale-95 shadow-lg shadow-blue-500/25"
              >
                <span>View Projects</span>
                <Rocket size={18} />
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-3.5 bg-white text-blue-700 font-bold rounded-xl border-2 border-b-4 border-blue-600 hover:bg-blue-50 active:border-b-2 active:translate-y-1 transition-all duration-150 ease-out active:scale-95 shadow-sm"
              >
                Contact Me
              </button>
            </div>

            {/* Contact & Social Quick Bar */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start items-center">
              <a
                href="mailto:mishra.shiva999@gmail.com"
                className="flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-105 text-gray-700 hover:text-blue-600 border border-gray-200/80 text-xs sm:text-sm font-medium"
                aria-label="Email Shivam Mishra"
              >
                <Mail size={16} className="text-blue-600" />
                <span>mishra.shiva999@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shivam-mishra-945456129/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-110 text-gray-700 hover:text-blue-700 border border-gray-200/80"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/shivam-mishra999"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-110 text-gray-700 hover:text-gray-900 border border-gray-200/80"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
            </div>

          </div>

          {/* Right Column: Breathtaking Hero Image Presentation */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md lg:max-w-lg px-2 sm:px-4">

              {/* Layer 1: Ambient Rotating Neon Glow Ring */}
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 via-indigo-500 via-purple-500 to-cyan-400 rounded-[40px] blur-xl opacity-60 animate-spin-slow pointer-events-none"></div>

              {/* Main Outer Gradient Border Card */}
              <div className="relative rounded-[32px] p-2.5 sm:p-3 bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 shadow-[0_25px_60px_-15px_rgba(37,99,235,0.35)] transform transition-all duration-500 hover:scale-[1.01]">
                {/* Image Container */}
                <div className="rounded-[24px] overflow-hidden relative aspect-[4/5] bg-slate-900 group">
                  <img
                    src={heroImg}
                    alt="Shivam Mishra - React Native & React Developer"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Bottom Dark Shimmer Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/10 to-transparent"></div>

                  {/* Integrated Glass Tag overlay inside photo base */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 flex items-center justify-between text-white">
                    <div>
                      <p className="text-xs font-semibold text-blue-300 flex items-center gap-1">
                        <CheckCircle2 size={13} className="text-green-400" />
                        <span>Shivam Mishra</span>
                      </p>
                      <p className="text-[11px] text-gray-300 font-medium">Mobile App Developer</p>
                    </div>
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse [animation-delay:0.3s]"></span>
                      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse [animation-delay:0.6s]"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Pill 1 - Top Left */}
              <div className="absolute -top-5 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-blue-100 flex items-center gap-2.5 animate-float z-20">
                <div className="p-2 bg-blue-100/80 rounded-xl text-blue-700">
                  <Smartphone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-blue-600 font-bold">Specialist</p>
                  <p className="text-xs font-bold text-gray-900">React Native Apps</p>
                </div>
              </div>

              {/* Floating Tech Pill 2 - Top Right */}
              <div className="absolute top-8 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-indigo-100 flex items-center gap-2.5 animate-float-delayed z-20">
                <div className="p-2 bg-indigo-100/80 rounded-xl text-indigo-700">
                  <Code2 size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-indigo-600 font-bold">Team Lead</p>
                  <p className="text-xs font-bold text-gray-900">Mobile Application</p>
                </div>
              </div>

              {/* Floating Tech Pill 3 - Bottom Left */}
              <div className="absolute bottom-28 -left-3 sm:-left-7 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-cyan-100 flex items-center gap-2.5 animate-float-delayed z-20">
                <div className="p-2 bg-cyan-100/80 rounded-xl text-cyan-700">
                  <Zap size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-cyan-600 font-bold">Features</p>
                  <p className="text-xs font-bold text-gray-900">Native-side Handling</p>
                </div>
              </div>

              {/* Floating Tech Pill 4 - Bottom Right */}
              <div className="absolute -bottom-5 -right-2 sm:-right-5 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-2.5 animate-float z-20">
                <div className="p-2 bg-emerald-100/80 rounded-xl text-emerald-700">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-emerald-600 font-bold">Releases</p>
                  <p className="text-xs font-bold text-gray-900">iOS & Android Stores</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll down indicator */}
        <div className="text-center mt-12">
          <button
            onClick={() => scrollToSection('#about')}
            className="inline-block text-blue-600 hover:text-blue-700 transition-colors animate-bounce p-2"
            aria-label="Scroll down to About section"
          >
            <ArrowDown size={28} />
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;


