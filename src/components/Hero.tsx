import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Frontend Developer & Content Creator
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, responsive web experiences and share my journey
            through code on YouTube. Passionate about clean code, modern design,
            and helping others learn.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110 hover:bg-gray-50"
              aria-label="GitHub"
            >
              <Github size={24} className="text-gray-700" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110 hover:bg-gray-50"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-gray-700" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-110 hover:bg-gray-50"
              aria-label="Email"
            >
              <Mail size={24} className="text-gray-700" />
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('#about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} className="text-blue-600" />
        </button>
      </div>
    </section>
  );
}

export default Hero;
