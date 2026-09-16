import { Briefcase, Calendar, FolderGit2 } from 'lucide-react';
import i2globalLogo from '../assets/I2global.jpg';
import liskovLogo from '../assets/Liskov.png';
import samsungLogo from '../assets/Samsung.jpg';

function WorkExperience() {
  const experiences = [
    {
      role: 'React Native Developer (Team Lead)',
      company: 'I2 Global Virtual Learning Pvt. Ltd.',
      logo: i2globalLogo,
      logoBg: 'bg-white border-blue-100',
      dates: '25 Sep 2025 – Present',
      duration: '1 Year 2 Months*',
      focus: [
        'React Native development',
        'Mobile application development',
        'Production application development',
        'Deployment & Release Management',
        'End-to-end application release lifecycle',
      ],
      projects: ['PPLSYNC', 'PPLSYNC Web', 'ProEdge'],
    },
    {
      role: 'React Native Developer (SE-I)',
      company: 'Liskov AI Garage',
      logo: liskovLogo,
      logoBg: 'bg-white border-blue-100',
      dates: '1 Sep 2024 – 24 Sep 2025',
      duration: '1 Year 1 month',
      focus: [
        'React Native development',
        'Mobile applications',
        'React/web development',
        'Application development',
      ],
      projects: ['MyThing.ai', 'MyPdf'],
    },
    {
      role: 'Senior Assistant Engineer',
      company: 'Samsung India Electronics Pvt. Ltd.',
      logo: samsungLogo,
      logoBg: 'bg-black border-gray-900',
      dates: '16 Apr 2018 – 31 May 2019',
      duration: '1 Year 2 months',
      focus: [
        'Calibrating Software Applications on Fuji Robots',
        'Handling Software & Hardware Integration',
        'Quality assurance & system reliability',
      ],
      projects: ['Engineering Operations'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional trajectory in Mobile and Web Application Engineering
          </p>
        </div>

        {/* Roles Timeline */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <div className="p-2 bg-blue-600 text-white rounded-lg">
              <Briefcase size={22} />
            </div>
            Professional Experience
          </h3>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 via-cyan-600 to-indigo-600"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                  <div
                    className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'
                      }`}
                  >
                    <div className="bg-gradient-to-br from-blue-50/70 to-cyan-50/70 rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-2">
                            {exp.duration}
                          </span>
                          <h4 className="text-xl font-bold text-gray-900 leading-snug">
                            {exp.role}
                          </h4>
                          <p className="text-lg text-blue-700 font-semibold mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl overflow-hidden p-2 shadow-lg border flex items-center justify-center ${exp.logoBg}`}>
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-4 pb-3 border-b border-blue-100">
                        <Calendar size={16} className="text-blue-600" />
                        <span>{exp.dates}</span>
                      </div>

                      <div className="mb-4">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                          Core Focus:
                        </p>
                        <ul className="space-y-1.5">
                          {exp.focus.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-700 font-medium"
                            >
                              <span className="text-blue-600 font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                          <FolderGit2 size={14} className="text-blue-600" />
                          <span>Associated Projects:</span>
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp?.projects?.map((proj, pIdx) => (
                            <span
                              key={pIdx}
                              className="px-3 py-1 bg-white border border-blue-200 text-blue-800 text-xs font-semibold rounded-lg shadow-sm"
                            >
                              {proj}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
