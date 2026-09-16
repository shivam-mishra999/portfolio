import { Trophy, Award, Medal, Flame } from 'lucide-react';
import ttImage from '../assets/table_tennis.jpg';
import cricketImage from '../assets/cricket.jpg';

function Achievements() {
  const ttAchievements = [
    {
      year: '2010',
      title: 'State Level Table Tennis Championship',
      desc: 'Achieved 2nd rank in the State Level Table Tennis Championship.',
      highlight: '2nd Rank State Level',
    },
    {
      year: 'National Level',
      title: 'National Table Tennis Participation',
      desc: 'Participated at National Level Table Tennis Competitions.',
      highlight: 'National Player',
    },
    {
      year: '2014 – 2016',
      title: 'KIET Sports Fest Table Tennis Championship',
      desc: 'Won the Table Tennis Championship in KIET Sports Fest consecutively for three years (2014, 2015, 2016).',
      highlight: '3x Consecutive Champion',
    },
    {
      year: '2018',
      title: 'Samsung Table Tennis Championship',
      desc: 'Won the Samsung Table Tennis Championship in 2018.',
      highlight: 'Corporate Champion',
    },
  ];

  const cricketAchievements = [
    {
      year: '2014',
      title: 'KIET Sports Fest Cricket Tournament',
      desc: 'Won the Cricket Tournament in KIET Sports Fest in 2014.',
      highlight: 'Tournament Winner',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-4">
            <Flame size={16} className="text-amber-600" />
            Beyond Code
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Extracurricular Achievements
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Competitive excellence and leadership in sports tournaments
          </p>
        </div>

        {/* Table Tennis Block */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-amber-500 text-white rounded-2xl shadow-md">
              <Trophy size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Table Tennis Championships
              </h3>
              <p className="text-sm text-gray-600">
                State, National & Corporate tournament achievements
              </p>
            </div>
          </div>

          {/* Featured Table Tennis Showcase Card */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-8">
            <div className="lg:col-span-1 relative rounded-2xl overflow-hidden shadow-lg border border-amber-200 group min-h-[260px]">
              <img
                src={ttImage}
                alt="Table Tennis Championship"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full w-fit mb-2 shadow-md">
                  Sports Excellence
                </span>
                <h4 className="text-xl font-bold">Table Tennis Champion</h4>
                <p className="text-xs text-amber-200 mt-1">State Rank 2 & 3x KIET Fest Winner</p>
              </div>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {ttAchievements.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-lg">
                        {item.year}
                      </span>
                      <Medal size={20} className="text-amber-500" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                      {item.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cricket Block */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-600 text-white rounded-2xl shadow-md">
              <Award size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Cricket Tournament
              </h3>
              <p className="text-sm text-gray-600">
                Team sports achievements
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-blue-200 group h-64">
              <img
                src={cricketImage}
                alt="Cricket Tournament"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full w-fit mb-2 shadow-md">
                  Cricket Championship
                </span>
                <h4 className="text-xl font-bold">Tournament Winners</h4>
                <p className="text-xs text-blue-200 mt-1">KIET Sports Fest 2014 Winner</p>
              </div>
            </div>

            <div className="space-y-4">
              {cricketAchievements.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex items-center justify-between gap-4"
                >
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-lg mb-2">
                      {item.year}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-full shrink-0">
                    <Trophy size={24} />
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

export default Achievements;
