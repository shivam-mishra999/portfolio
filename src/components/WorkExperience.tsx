import { Briefcase, Calendar } from 'lucide-react';

function WorkExperience() {
  const experiences = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Frontend Developer',
      period: '2022 - Present',
      description:
        'Leading frontend development for enterprise applications. Architecting scalable solutions using React and TypeScript. Mentoring junior developers and establishing best practices.',
      achievements: [
        'Improved application performance by 40%',
        'Led migration to TypeScript across 5 major projects',
        'Implemented design system used across the organization',
      ],
    },
    {
      company: 'Digital Creative Agency',
      position: 'Frontend Developer',
      period: '2020 - 2022',
      description:
        'Developed responsive websites and web applications for clients across various industries. Collaborated with designers and backend developers to deliver high-quality products.',
      achievements: [
        'Delivered 30+ client projects on time and within budget',
        'Reduced page load times by 50% through optimization',
        'Built reusable component library for agency projects',
      ],
    },
    {
      company: 'StartUp Ventures',
      position: 'Junior Frontend Developer',
      period: '2019 - 2020',
      description:
        'Contributed to building MVP products for early-stage startups. Worked in fast-paced agile environment, rapidly prototyping and iterating on features.',
      achievements: [
        'Shipped features used by 10,000+ users',
        'Implemented responsive designs for mobile-first approach',
        'Collaborated with cross-functional teams',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey in frontend development
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-blue-600 rounded-lg">
                        <Briefcase size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-lg text-blue-600 font-semibold mb-2">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-900">
                        Key Achievements:
                      </p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
