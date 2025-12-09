export default function People() {
  const faculty = [
    { id: 1, name: "Prof. A. K. Sinha", designation: "Head of Department", area: "Power Systems" },
    { id: 2, name: "Prof. B. N. Singh", designation: "Professor", area: "Power Electronics" },
    { id: 3, name: "Prof. C. D. Gupta", designation: "Associate Professor", area: "Control Systems" },
    { id: 4, name: "Prof. E. F. Kumar", designation: "Assistant Professor", area: "Computer Technology" },
    { id: 5, name: "Prof. G. H. Patel", designation: "Professor", area: "Digital Signal Processing" },
    { id: 6, name: "Prof. I. J. Sharma", designation: "Associate Professor", area: "Renewable Energy" },
    { id: 7, name: "Prof. K. L. Verma", designation: "Assistant Professor", area: "Microelectronics" },
    { id: 8, name: "Prof. M. N. Desai", designation: "Professor", area: "High Voltage Engineering" },
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
          <h1 className="section-title">OUR PEOPLE</h1>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Faculty Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member) => (
              <div key={member.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <div className="text-6xl">👨‍🏫</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-2">
                    {member.designation}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {member.area}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Students Section */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
            Students
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                level: "B.Tech",
                count: "120",
                desc: "Undergraduate students pursuing their Bachelor's degree in Electrical Engineering",
              },
              {
                level: "M.Tech",
                count: "180",
                desc: "Postgraduate students enrolled in various specialization programs",
              },
              {
                level: "PhD",
                count: "80",
                desc: "Doctoral researchers working on cutting-edge projects",
              },
              {
                level: "Total",
                count: "380",
                desc: "Combined student strength across all programs",
              },
            ].map((student, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-red-600 mb-2">
                  {student.count}
                </h3>
                <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {student.level} Students
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {student.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
