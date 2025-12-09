export default function Academics() {
  const programs = [
    {
      title: "Electrical Engineering",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "./ee1.png",
    },
    {
      title: "Electrical Enginnering (Power and automation)",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      image: "./ee3.png",
    }
  ];

  return (
    <div className="w-full pt-20">
      {/* Hero Banner */}
      <section
        className="relative w-full min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url("/image_iitd.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundColor: '#111',
        }}
      >
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            ACADEMICS
          </h1>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-6 bg-white flex flesx-col items-center justify-center">
        <div className="max-w-6xl mx-auto space-y-14">
          {programs.map((program, idx) => (
            <div
              key={program.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                idx % 2 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              {/* Image */}
              <div className="w-full">
                <div className="relative w-full overflow-hidden rounded-lg shadow-lg bg-gray-200" style={{ maxHeight: '380px' }}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full space-y-4">
                <h3 className="text-3xl font-bold text-red-600">{program.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {program.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
                >
                  Click here to learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specializations */}
    </div>
  );
}
