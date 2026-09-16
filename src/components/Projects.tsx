import { ExternalLink, Smartphone, Globe, Calendar, Check, Award, Layers } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'PPLSYNC – HRMS & Workforce Management App',
      category: 'HRMS / Workforce Management / Mobile Application',
      dates: 'September 2025 – February 2026',
      platforms: ['Android', 'iOS'],
      description:
        'PPLSYNC is a comprehensive HRMS and workforce management platform designed to streamline employee operations, attendance management, payroll processing, organizational workflows, and live location tracking.',
      techStack: [
        'React Native',
        'Redux Toolkit (RTK)',
        'Firebase Realtime Database',
        'Firebase Cloud Messaging (Push Notifications)',
        'AWS Rekognition',
        'Geolocation Services',
      ],
      keyFeatures: [
        'Attendance Management & Automated Workflows',
        'Payroll Management',
        'Leave & Permission Requests',
        'Organization Hierarchy & Role-Based Access Control (Admin, HR, Employee)',
        'Real-time Live Tracking & Geo-Fencing Technology',
        'Facial Recognition Attendance for Punch-In/Punch-Out',
        'Employee Self-Service Portal',
      ],
      achievements: [
        'Built scalable HRMS modules with real-time employee tracking.',
        'Implemented geo-fencing validation.',
        'Implemented facial-recognition-based attendance verification.',
        'Built automated attendance workflows.',
        'Independently developed, deployed, published, and maintained the application on both Google Play Store and Apple App Store.',
        'Managed the complete release lifecycle end-to-end.',
      ],
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      linkLabel: 'View on Google Play Store',
      url: 'https://play.google.com/store/apps/details?id=com.hrmanagmentv2&hl=en_IN',
    },
    {
      title: 'PPLSYNC Web – HRMS & Workforce Management Web Portal',
      category: 'Web Application / HRMS',
      dates: 'October 2025 – March 2026',
      platforms: ['Web Portal'],
      description:
        'PPLSYNC Web is a comprehensive HRMS and workforce management portal that enables organizations to manage employee operations, attendance, payroll, and workforce monitoring through a centralized web platform.',
      techStack: [
        'Next.js',
        'Tailwind CSS',
        'Redux Toolkit (RTK)',
        'Redux',
        'Firebase Realtime Database',
        'AWS Rekognition',
      ],
      keyFeatures: [
        'Attendance Management & Attendance Monitoring',
        'Payroll Management & Leave Requests',
        'Organization Hierarchy & Role-Based Access Control (Admin, HR, Employee)',
        'Real-time Live Tracking & Geo-Fencing Technology',
        'Facial Recognition Attendance Monitoring',
        'Employee Management Dashboard & Reports & Analytics',
      ],
      achievements: [
        'Developed responsive and scalable HRMS dashboards.',
        'Implemented real-time workforce visibility.',
        'Implemented attendance monitoring.',
        'Built employee management workflows.',
        'Integrated real-time location tracking.',
        'Integrated geo-fencing capabilities for workforce monitoring and field employee management.',
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      linkLabel: 'Visit Website',
      url: 'https://pplsync.io/',
    },
    {
      title: 'ProEdge – EdTech Learning & Live Class Platform',
      category: 'EdTech / Live Learning / Mobile Application',
      dates: 'March 2026 – June 2026',
      platforms: ['Android'],
      description:
        'ProEdge is a mobile-first EdTech platform that enables students to purchase courses, attend live interactive classes, and communicate with tutors.',
      techStack: [
        'React Native',
        'Firebase Cloud Messaging (Push Notifications)',
        'Google OAuth',
        'Google Cloud Platform (GCP)',
        'Agora Video SDK',
        'Agora Chat SDK',
        'Razorpay Payment Gateway',
      ],
      keyFeatures: [
        'Course Purchase & Enrollment & Razorpay Payment Integration',
        'Live Interactive Classes with Agora Video Calling & In-session Chat',
        'Whiteboard Collaboration, Picture-in-Picture (PiP), & Virtual Backgrounds',
        'Polls, Note Taking, Screen Sharing, & Voice Search',
        'Google Calendar Integration & Tutor-Student Messaging',
      ],
      achievements: [
        'Built a scalable virtual classroom experience with real-time video conferencing.',
        'Integrated secure authentication & online payments.',
        'Integrated calendar synchronization & push notification workflows.',
        'Implemented whiteboard collaboration, screen sharing, Picture-in-Picture, polls, and note taking.',
        'Implemented real-time participant interactions.',
        'Independently configured GCP services.',
        'Deployed the application to Google Play Store & managed the complete release lifecycle end-to-end.',
      ],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
      linkLabel: 'View on Google Play Store',
      url: 'https://play.google.com/store/apps/details?id=com.i2global.proedge&hl=en_IN',
    },
    {
      title: 'MyPdf – PDF Editing Mobile App',
      category: 'Productivity / PDF Utility / Mobile Application',
      dates: 'June 2025 – July 2025',
      platforms: ['Mobile Application'],
      description:
        'MyPdf is a comprehensive mobile application focused on major PDF editing and utility features, built independently using React Native.',
      techStack: [
        'React Native',
        'Expo',
        'HTML to PDF libraries',
        'File System APIs',
        'AES Encryption',
        'Image Processing',
        'AsyncStorage',
        'Cloud Storage',
      ],
      keyFeatures: [
        'eSign & Add text / images to PDF',
        'Highlight text & Protect / Encrypt PDFs',
        'Scan to PDF & Convert images / webpages to PDF',
        'Compress PDFs & Compress images',
        'Create MCQ papers',
      ],
      achievements: [],
      image: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=800&q=80',
      linkLabel: 'View on Google Play Store',
      url: 'https://play.google.com/store/apps/details?id=com.liskov.mypdf&hl=en_US',
    },
    {
      title: 'MyThing.ai – Productivity Mobile App',
      category: 'Productivity / Mobile Application',
      dates: 'September 2024 – February 2025',
      platforms: ['Mobile Application'],
      description:
        'MyThing.ai is a fully-featured productivity application built single-handedly using React Native.',
      techStack: [
        'React Native',
        'Expo',
        'AES Encryption',
        'RSA Encryption',
        'MySQL',
        'REST APIs',
        'Google OAuth',
        'AsyncStorage',
        'AdMob',
        'RNIAP',
        'Cloud Storage',
      ],
      keyFeatures: [
        'Goal Tracker & To-Do List',
        'PDF Unlocker & QR Scanner',
        'File uploads (Text, Image, Audio, Video)',
        'Secure Vault with PIN/Fingerprint security',
        'Link Preview & Travelogue with Google Maps integration',
        'Supports 50+ languages & Full cloud synchronization',
        'Secure authentication, Monetization through AdMob & In-app purchases',
      ],
      achievements: [],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      linkLabel: 'View on Google Play Store',
      url: 'https://play.google.com/store/apps/details?id=com.liskov.mything&hl=en_US',
    },
  ];

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Production mobile and web applications engineered with React Native, React.js, and Next.js
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Visual Banner / Image */}
                <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[100%] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white leading-snug">
                      {project.title.split('–')[0]}
                    </h3>
                  </div>
                </div>

                {/* Details Content */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        {project.platforms.map((plat) => (
                          <span
                            key={plat}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100/80 text-blue-800 text-xs font-bold rounded-full"
                          >
                            {plat.toLowerCase().includes('web') ? (
                              <Globe size={14} />
                            ) : (
                              <Smartphone size={14} />
                            )}
                            {plat}
                          </span>
                        ))}
                      </div>

                      {/* <div className="flex items-center gap-1 text-xs font-semibold text-gray-500">
                        <Calendar size={14} className="text-blue-600" />
                        <span>{project.dates}</span>
                      </div> */}
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 text-base mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6 bg-blue-50/50 rounded-2xl p-4 border border-blue-100/60">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-3 flex items-center gap-1.5">
                        <Layers size={15} className="text-blue-600" />
                        <span>Key Features</span>
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {project.keyFeatures.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2 text-xs font-medium text-gray-700"
                          >
                            <Check size={14} className="text-green-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements if present */}
                    {project.achievements.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5">
                          <Award size={15} className="text-blue-600" />
                          <span>Achievements / Responsibilities</span>
                        </h4>
                        <ul className="space-y-1.5 pl-1">
                          {project.achievements.map((ach, aIdx) => (
                            <li
                              key={aIdx}
                              className="text-xs text-gray-600 leading-snug flex items-start gap-2"
                            >
                              <span className="text-blue-600 font-bold">•</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-lg border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 text-xs font-bold shadow-md hover:shadow-lg transform hover:scale-105"
                        aria-label={`Visit ${project.title}`}
                      >
                        <ExternalLink size={16} />
                        <span>{project.linkLabel}</span>
                      </a>
                    ) : (
                      <button
                        onClick={scrollToContact}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200 text-xs font-semibold shadow-sm"
                        title={`${project.linkLabel} reference in resume`}
                      >
                        <ExternalLink size={16} />
                        <span>{project.linkLabel}</span>
                      </button>
                    )}
                    <span className="text-xs text-gray-500 font-medium">
                      {project.url ? 'Live Production Link' : 'Live URL available on request'}
                    </span>
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

export default Projects;
