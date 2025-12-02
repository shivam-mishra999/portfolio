import { Youtube, Play, Users, Video } from 'lucide-react';

function YouTube() {
  const stats = [
    { icon: Users, label: 'Subscribers', value: '50K+' },
    { icon: Video, label: 'Videos', value: '100+' },
    { icon: Play, label: 'Total Views', value: '2M+' },
  ];

  const videos = [
    {
      title: 'React Hooks Tutorial - Complete Guide',
      thumbnail: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: '50K views',
      duration: '45:30',
    },
    {
      title: 'Building a Modern Portfolio Website',
      thumbnail: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: '35K views',
      duration: '32:15',
    },
    {
      title: 'TypeScript Best Practices 2024',
      thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: '42K views',
      duration: '28:45',
    },
  ];

  return (
    <section id="youtube" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Youtube size={40} className="text-red-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              YouTube Channel
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I create educational content about web development, sharing
            tutorials, tips, and insights to help developers level up their
            skills
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-red-50 rounded-full">
                  <stat.icon size={32} className="text-red-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Videos
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <a
                key={index}
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                      <Play size={28} className="text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200">
                    {video.title}
                  </h4>
                  <p className="text-sm text-gray-600">{video.views}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg font-semibold"
          >
            <Youtube size={24} />
            <span>Subscribe to My Channel</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default YouTube;
