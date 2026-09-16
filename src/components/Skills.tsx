import { Smartphone, Globe, Wrench, Cpu, CheckCircle2, Gauge, Sparkles } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      title: 'PERFORMANCE OPTIMIZATION & ANALYTICS',
      icon: Gauge,
      color: 'from-amber-500 via-rose-500 to-indigo-600',
      badgeBg: 'bg-white/95 text-gray-900 border-amber-200/90 shadow-sm hover:border-rose-400 hover:bg-white',
      featured: true,
      skills: [
        'Firebase Analytics',
        'Microsoft Clarity',
        'Firebase Crashlytics',
        'React & React Native Profiler',
        'Hermes Memory & Performance Profiling',
        'Memory Leak & Render Optimization',
        'Bundle Size & Network Optimization',
      ],
    },
    {
      title: 'MOBILE APP DEVELOPMENT',
      icon: Smartphone,
      color: 'from-blue-600 to-indigo-600',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
      skills: [
        'React Native',
        'SSL Pinning',
        'MITM Attack Protection',
        'App Integrity & Security',
        'AES/RSA Data Encryption',
        'Android Build with Hermes',
        'Bare Workflow & Native Modules',
        'Redux Toolkit (RTK) & RTK Query',
        'Context API & State Management',
        'SQLite & Local Storage',
        'Real-time Geo-Tracking & Geo-Fencing',
        'Push Notifications (FCM)',
        'App Store & Play Store Releases',
      ],
    },
    {
      title: 'WEB DEVELOPMENT',
      icon: Globe,
      color: 'from-cyan-600 to-blue-600',
      badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      skills: [
        'React.js',
        'Next.js',
        'React Router',
        'SCSS',
        'HTML5',
        'CSS3',
        'Google Sheets Integration',
        'Form Handling',
        'Responsive Design',
        'Component-based Architecture',
        'REST APIs',
      ],
    },
    {
      title: 'TOOLS & PLATFORMS',
      icon: Wrench,
      color: 'from-indigo-600 to-purple-600',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      skills: [
        'Git',
        'GitHub',
        'GitLab',
        'Figma',
        'VS Code',
        'Postman',
        'Vercel',
      ],
    },
    {
      title: 'OTHER SKILLS',
      icon: Cpu,
      color: 'from-purple-600 to-pink-600',
      badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
      skills: [
        'File Uploads with pre-signed URLs',
        'OAuth Integration',
        'Debugging',
        'Deployment',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Categorized technical expertise across Mobile, Web, Tools, and specialized capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`${
                category.featured
                  ? 'md:col-span-2 bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 p-[2.5px] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1'
                  : 'bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between'
              }`}
            >
              <div className={category.featured ? 'bg-gradient-to-br from-amber-50/95 via-rose-50/90 to-indigo-50/95 rounded-[22px] p-6 sm:p-8 h-full flex flex-col justify-between' : ''}>
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200/60">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-md`}>
                      <category.icon size={24} />
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900 tracking-wide">
                        {category.title}
                      </h3>
                      {category.featured && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                          <Sparkles size={12} />
                          <span>Performance & Analytics</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-bold transition-all duration-200 hover:scale-105 ${category.badgeBg}`}
                      >
                        <CheckCircle2 size={16} className={`shrink-0 ${category.featured ? 'text-rose-600' : ''}`} />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
