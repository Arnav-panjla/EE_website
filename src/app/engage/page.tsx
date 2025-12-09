export default function Engage() {
  return (
    <div className="w-full pt-20">
      {/* Hero Banner */}
      <section className="hero-section" style={{
        backgroundColor: '#1a1a1a',
        minHeight: '60vh',
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="section-title">GET ENGAGED</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Join our community and be part of groundbreaking research and innovation
          </p>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Get Involved
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: "🎓",
                title: "Join Our Programs",
                desc: "Explore B.Tech, M.Tech, and PhD opportunities in electrical engineering and related fields.",
              },
              {
                icon: "🔬",
                title: "Research Projects",
                desc: "Participate in cutting-edge research projects across power systems, electronics, and control.",
              },
              {
                icon: "🤝",
                title: "Internships",
                desc: "Gain practical experience through internships with leading industries and research organizations.",
              },
              {
                icon: "💼",
                title: "Career Opportunities",
                desc: "Explore exciting career prospects with top companies and research institutions worldwide.",
              },
              {
                icon: "📚",
                title: "Workshops & Seminars",
                desc: "Attend technical workshops, seminars, and guest lectures from industry experts.",
              },
              {
                icon: "🏆",
                title: "Competitions",
                desc: "Participate in innovation challenges, hackathons, and technical competitions.",
              },
            ].map((opp, idx) => (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
              >
                <div className="text-5xl mb-4">{opp.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {opp.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {opp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Upcoming Events
          </h2>
          <div className="space-y-6">
            {[
              { date: "Jan 15, 2025", title: "Tech Talk: AI in Power Systems", location: "Main Auditorium" },
              { date: "Jan 22, 2025", title: "Research Symposium", location: "Convention Center" },
              { date: "Feb 05, 2025", title: "Industry Networking Session", location: "Alumni Hall" },
              { date: "Feb 20, 2025", title: "Innovation Hackathon", location: "Computer Lab" },
            ].map((event, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-lg transition-shadow duration-300"
              >
                <div>
                  <p className="text-red-600 font-semibold text-sm">
                    {event.date}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                    📍 {event.location}
                  </p>
                </div>
                <button className="mt-4 md:mt-0 px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-red-600 dark:bg-red-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Join us on a journey of innovation, collaboration, and excellence
          </p>
          <button className="px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
