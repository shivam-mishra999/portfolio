import { Smartphone, Globe, Layers, ShieldCheck, MapPin, Zap, Lock, CreditCard, Sparkles, Rocket, Bell, Map, Key } from 'lucide-react';
import { motion } from 'framer-motion';

function About() {
  const highlights = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Hands-on expertise building cross-platform React Native applications for iOS and Android using Bare Workflow, Expo, SQLite, and Hermes builds.',
    },
    {
      icon: Globe,
      title: 'Web Application Development',
      description:
        'Crafting responsive web portals and web applications with React.js, Next.js, SCSS, Tailwind CSS, Component-based architecture, and REST APIs.',
    },
    {
      icon: Layers,
      title: 'End-to-End Release Lifecycle',
      description:
        'Independently developing, configuring, deploying, publishing, and maintaining production applications on both Google Play Store and Apple App Store.',
    },
    {
      icon: ShieldCheck,
      title: 'Real-time & Cloud Systems',
      description:
        'Integrating real-time features with Firebase Realtime Database, push notifications (FCM), AWS Rekognition, Google Maps, and Agora video/chat SDKs.',
    },
  ];

  const focusAreas = [
    { name: 'React Native (iOS & Android)', icon: Smartphone },
    { name: 'React.js & Next.js Web', icon: Globe },
    { name: 'Real-time Location Tracking & Geo-Fencing', icon: MapPin },
    { name: 'Google Maps API & Location Services', icon: Map },
    { name: 'Facial Recognition & AWS Rekognition', icon: Zap },
    { name: 'Authentication & OAuth Security', icon: Lock },
    { name: 'AES/RSA Data Encryption', icon: Key },
    { name: 'App Security & Hardening', icon: ShieldCheck },
    { name: 'Payment SDK Integrations (like Razorpay)', icon: CreditCard },
    { name: 'App Store & Play Store Release Management', icon: Rocket },
    { name: 'Global State Management & RTK Query', icon: Layers },
    { name: 'Push Notifications & Firebase Realtime Sync', icon: Bell },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 120, damping: 14 },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 200, damping: 15 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            React Native & React Developer dedicated to building robust production applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Main Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 90, damping: 14 }}
            className="lg:col-span-7 space-y-6 text-gray-700 text-lg leading-relaxed"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-6 bg-gradient-to-r from-blue-50/80 to-cyan-50/80 border-l-4 border-blue-600 rounded-r-2xl shadow-xs"
            >
              <p className="font-semibold text-gray-900 text-xl mb-1">
                Professional Positioning
              </p>
              <p className="text-gray-800">
                React Native Developer with experience in mobile application development and React.js/Next.js web development, with hands-on experience building, deploying, and maintaining production applications.
              </p>
            </motion.div>

            <p>
              My expertise spans the entire mobile and web development ecosystem. I specialize in building scalable frontend architectures, integrating robust REST APIs, managing global state with Redux Toolkit (RTK) & RTK Query, and engineering production-grade features.
            </p>

            <p>
              Throughout my journey across organizations like <strong className="text-gray-900">I2 Global Virtual Learning</strong>, <strong className="text-gray-900">Liskov AI Garage</strong> and <strong className="text-gray-900">Samsung India</strong>, I have delivered critical mobile and web platforms including HRMS workforce applications, EdTech live learning portals, PDF utility apps, and AI-powered productivity suites.
            </p>

            {/* Highlighted Callout Box */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.015, y: -2 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120, damping: 12 }}
              className="p-6 bg-gradient-to-r from-amber-50 via-yellow-50/80 to-amber-50 border-l-4 border-amber-500 rounded-r-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="font-bold text-amber-950 text-lg mb-1.5 flex items-center gap-2">
                <Sparkles size={20} className="text-amber-600 animate-pulse" />
                <span>End-to-End Production Impact</span>
              </p>
              <p className="text-gray-800 leading-relaxed">
                I take pride in taking applications across the finish line — managing end-to-end release lifecycles on Google Play Store and Apple App Store, implementing facial recognition attendance verification, real-time live location tracking with geo-fencing, in-app Agora video calling, and secure payment integrations.
              </p>
            </motion.div>
          </motion.div>

          {/* Key Pillars Cards with Framer Motion Stagger & 3D Hover */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  y: -6,
                  boxShadow: '0 20px 30px -10px rgba(59, 130, 246, 0.22)',
                }}
                className="p-5 bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-2xl border border-gray-100/90 shadow-sm cursor-pointer transition-colors duration-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-xl shadow-md">
                    <item.icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-normal pl-1">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Specialized Production Capabilities Grid with Staggered Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/80 shadow-sm"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Specialized Production Capabilities
          </h3>
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={gridItemVariants}
                whileHover={{
                  scale: 1.04,
                  y: -4,
                  borderColor: '#3b82f6',
                  boxShadow: '0 10px 20px -5px rgba(59, 130, 246, 0.18)',
                }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-200/80 text-gray-800 font-medium cursor-pointer transition-all duration-200"
              >
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                  <area.icon size={20} />
                </div>
                <span className="text-sm font-semibold">{area.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
