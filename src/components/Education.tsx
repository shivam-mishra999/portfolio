import { GraduationCap, Award, Calendar, CheckCircle } from 'lucide-react';

function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education & Learning
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic qualifications and professional software development fellowship
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Degree Education Card */}
          <div className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 rounded-3xl p-8 border border-blue-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-md">
                  <GraduationCap size={28} />
                </div>
                <span className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full">
                  Degree
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                B.Tech, Electronics & Communication Engineering (ECE)
              </h3>
              <p className="text-lg font-bold text-blue-700 mb-4">
                KIET Group of Institutions
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                  <Calendar size={18} className="text-blue-600" />
                  <span>Duration: 2014 – 2018</span>
                </div>
                <div className="flex items-center gap-2 text-gray-900 text-base font-bold bg-white/80 p-3 rounded-xl border border-blue-100">
                  <CheckCircle size={18} className="text-green-600" />
                  <span>Score / Academic Percentage: 80.60%</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 italic pt-4 border-t border-blue-100">
              Bachelor of Technology in Electronics & Communication Engineering
            </p>
          </div>

          {/* Professional Development Fellowship Card */}
          <div className="bg-gradient-to-br from-indigo-50/80 to-purple-50/80 rounded-3xl p-8 border border-indigo-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="p-3 bg-indigo-600 text-white rounded-2xl shadow-md">
                  <Award size={28} />
                </div>
                <span className="px-4 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-full">
                  Fellowship
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Fellowship in Software Development
              </h3>
              <p className="text-lg font-bold text-indigo-700 mb-4">
                Crio.do
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
                  <Calendar size={18} className="text-indigo-600" />
                  <span>Dates: June 2023 – February 2024</span>
                </div>
                <div className="p-4 bg-white/80 rounded-xl border border-indigo-100 text-gray-700 text-sm leading-relaxed">
                  Completed a comprehensive course in software development at Crio.do, focusing on Frontend development.
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 italic pt-4 border-t border-indigo-100">
              Intensive hands-on software development program
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
