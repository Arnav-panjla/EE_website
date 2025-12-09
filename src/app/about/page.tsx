export default function About() {
  return (
    <div className="w-full pt-20">
      {/* Hero Banner */}
      <section className="hero-section" style={{
        backgroundColor: '#1a1a1a',
        minHeight: '60vh',
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="section-title">ABOUT ELECTRICAL ENGINEERING</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="prose dark:prose-invert prose-lg max-w-none">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Department Overview
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The Department of Electrical Engineering at IIT Delhi is one of the premier institutions in the country for engineering education and research. With a history spanning several decades, the department has consistently strived to be at the forefront of technological advancement and innovation.
            </p>
            
            <h3 className="text-2xl font-bold text-red-600 mt-12 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              To educate, mentor and inspire students to become leaders in the field of electrical engineering, and to conduct research that addresses the challenges of society.
            </p>

            <h3 className="text-2xl font-bold text-red-600 mt-12 mb-4">
              Academic Programs
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
              <li>B.Tech in Electrical Engineering</li>
              <li>M.Tech in Power Systems</li>
              <li>M.Tech in Power Electronics</li>
              <li>M.Tech in Computer Technology</li>
              <li>Ph.D. Programs</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
