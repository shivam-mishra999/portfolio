import { Mail, Send, Github, Linkedin, MessageSquare, CheckCircle2, Sparkles, ArrowRight, AlertCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xqpazyzq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 6000);
    }
  };

  const contactCards = [
    {
      icon: Mail,
      label: 'Email Address',
      value: 'mishra.shiva999@gmail.com',
      href: 'mailto:mishra.shiva999@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
      bgLight: 'bg-blue-50 text-blue-600 border-blue-100',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      tooltip: 'Shivam Mishra LinkedIn',
      href: 'https://www.linkedin.com/in/shivam-mishra-945456129/',
      gradient: 'hover:from-blue-600 hover:to-indigo-600 hover:text-white',
    },
    {
      icon: Github,
      label: 'GitHub',
      tooltip: 'Shivam Mishra GitHub',
      href: 'https://github.com/shivam-mishra999',
      gradient: 'hover:from-gray-800 hover:to-gray-950 hover:text-white',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 via-white to-blue-50/40 relative overflow-hidden">
      {/* Decorative Ambient Glow background */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold mb-4 shadow-sm">
            <Sparkles size={14} className="text-blue-600" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-stretch">
          {/* Left Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <div className="p-2.5 bg-gradient-to-tr from-blue-600 to-cyan-600 text-white rounded-xl shadow-md">
                  <MessageSquare size={22} />
                </div>
                <span>Direct Contact</span>
              </h3>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactCards.map((info, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 flex items-center gap-4"
                  >
                    <div className={`p-3.5 rounded-xl border ${info.bgLight} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon size={22} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">
                        {info.label}
                      </p>
                      {info.href !== '#' ? (
                        <a
                          href={info.href}
                          className="text-base font-bold text-gray-900 hover:text-blue-600 transition-colors break-all flex items-center gap-1.5"
                        >
                          <span>{info.value}</span>
                          <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-600 shrink-0" />
                        </a>
                      ) : (
                        <p className="text-base font-bold text-gray-800">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links Panel */}
            <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-7 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>
              <p className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles size={14} className="text-cyan-400" />
                <span>Professional Profiles</span>
              </p>
              <h4 className="text-lg font-bold text-white mb-4">Connect Across Platforms</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.tooltip}
                    className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white font-semibold transition-all duration-300 ${social.gradient} hover:shadow-lg hover:border-transparent transform hover:-translate-y-0.5`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                    <span className="text-xs font-bold tracking-wide">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form Block */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl border border-blue-100 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">Send Me a Message</h3>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Active & Ready"></span>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-200 text-gray-900 text-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2"
                >
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-200 text-gray-900 text-sm"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3.5 bg-gray-50/70 border border-gray-200 rounded-2xl focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all duration-200 resize-none text-gray-900 text-sm"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-bold rounded-2xl hover:opacity-95 transition-all duration-300 transform hover:scale-[1.01] shadow-xl shadow-blue-600/25 flex items-center justify-center gap-2 text-base disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={19} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 text-sm font-medium animate-fadeIn">
                  <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                  <span>Thank you! Your message has been sent directly to my email.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-900 text-sm font-medium animate-fadeIn">
                  <AlertCircle size={20} className="text-rose-600 shrink-0" />
                  <span>Oops! Something went wrong while sending your message. Please try again or email directly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
            <p>© {new Date().getFullYear()} Shivam Mishra. All rights reserved.</p>
            <p className="text-gray-400">React Native Developer & React Developer</p>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
