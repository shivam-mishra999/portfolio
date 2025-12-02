import { Code2, Palette, Zap, Users } from 'lucide-react';

function About() {
  const skills = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and exceptional user experience',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating clearly',
    },
  ];

  const technologies = [
    'React',
    'TypeScript',
    'JavaScript',
    'HTML/CSS',
    'Tailwind CSS',
    'Next.js',
    'Vue.js',
    'Git',
    'Responsive Design',
    'REST APIs',
    'Redux',
    'Vite',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate frontend developer with a love for creating
              seamless digital experiences. With expertise in modern web
              technologies, I transform ideas into elegant, functional
              applications.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Beyond coding, I'm a content creator sharing my knowledge and
              experiences with the developer community through my YouTube
              channel. I believe in learning in public and helping others grow.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding or creating content, you'll find me exploring
              new technologies, contributing to open source, or mentoring
              aspiring developers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <skill.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
