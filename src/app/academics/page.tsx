export default function Academics() {
  const programs = [
    {
      title: "Electrical Engineering",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/academics-ee.jpg",
    },
    {
      title: "Power Systems",
      description: "Advanced M.Tech program focusing on power generation, transmission, and distribution systems.",
      image: "/academics-power.jpg",
    },
    {
      title: "Power Electronics",
      description: "Specialization in converter design, power management, and renewable energy integration.",
      image: "/academics-electronics.jpg",
    },
    {
      title: "Computer Technology",
      description: "M.Tech program emphasizing hardware and software design principles for computing systems.",
      image: "/academics-computer.jpg",
    },
  ];

  return (
    <div className="w-full pt-20">
      {/* Hero Banner */}
      <section className="hero-section" style={{
        backgroundColor: '#1a1a1a',
        minHeight: '60vh',
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="section-title">ACADEMICS</h1>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {programs.map((program, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <div className="card-image bg-gray-300 dark:bg-gray-700 aspect-video rounded-lg"></div>
                <div>
                  <h3 className="text-2xl font-bold text-red-600 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <a href="#" className="text-red-600 font-semibold hover:text-red-700 transition-colors">
                    Click here to learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Research Specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Power Engineering", desc: "The Power Engineering group consists of nine faculty members..." },
              { title: "Integrated Electronics and Circuits", desc: "The Integrated Electronics and Circuits (IEC) group comprises of 12 faculty members..." },
              { title: "Control and Automation", desc: "The Control Group currently has six faculty members with diverse interests..." },
              { title: "Computer Technology", desc: "The Computer Technology group offers an M.Tech programme..." },
            ].map((spec, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-700 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-red-600 mb-3">{spec.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
