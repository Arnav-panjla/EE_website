import Link from "next/link";

export default function Home() {


  return (
    <div className="w-full">
      {/* Hero Section with Background Image and Red Overlay */}
      <section
        className="relative w-full h-screen flex items-center justify-start pt-20"
        style={{
          backgroundImage: 'url("/image_iitd.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundColor: '#ffffff',
        }}
      >
        {/* Red Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-red-700/90 to-red-700/40 z-10"></div> */}

        {/* Hero Content */}
        <div className="absolute left-1/2 top-1/2 -translate-x-2/3 -translate-y-1/2 transform z-20 max-w-4xl px-12 md:px-12">
          <h1 className="text-6xl ml-12 md:text-7xl lg:text-8xl font-black leading-tight mb-8 animate-slide-up">
            <span className="block text-yellow-100">MAKING</span>
            <span className="block text-yellow-100">CONNECTIONS</span>
            <span className="block text-white">DELIVERING</span>
            <span className="block text-white">RESULTS</span>
          </h1>
        </div>
      </section>

      {/* What's Happening Section */}
      <section
        className="relative w-full flex items-center justify-start pt-20 h-[50vh]"
        style={{
          backgroundImage: 'url("/image_iitd.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-700/90 to-red-700/40 z-0"></div>
        <div className="relative max-w-7xl mx-auto z-10 w-full px-6 py-12 flex gap-4 flex-col items-center">
          <div className="mb-4 h-1 w-16 bg-white "></div>
          <h2 className="text-center text-5xl font-black text-white">
            WHAT&apos;S HAPPENING AROUND
          </h2>
          <div className="mt-6 h-px w-full bg-transparent" />
          <div className="flex gap-6 overflow-x-auto pb-6">
        {[
          {
            title: "Video Title",
            desc:
          "This is a great space to update your audience with a description of your video. Include information like…",
            duration: "02:05",
            thumb:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
          },
          {
            title: "Video Title",
            desc:
          "This is a great space to update your audience with a description of your video. Include information like…",
            duration: "03:27",
            thumb:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
          },
          {
            title: "Video Title",
            desc:
          "This is a great space to update your audience with a description of your video. Include information like…",
            duration: "02:05",
            thumb:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
          },
          {
            title: "Video Title",
            desc:
          "This is a great space to update your audience with a description of your video. Include information like…",
            duration: "03:27",
            thumb:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
          },
          {
            title: "Video Title",
            desc:
          "This is a great space to update your audience with a description of your video. Include information like…",
            duration: "02:05",
            thumb:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
          },
        ].map((video, idx) => (
          <div
            key={idx}
            className="min-w-[280px] bg-white/5 backdrop-blur-sm rounded-sm shadow-lg overflow-hidden border border-white/10"
          >
            <div className="relative h-40">
          <img
            src={video.thumb}
            alt={video.title}
            className="h-full w-full object-cover"
          />
          <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
            {video.duration}
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-12 w-12 rounded-full bg-white/80 flex items-center justify-center text-red-700 font-bold">
              ▶
            </div>
          </div>
            </div>
            <div className="p-3 text-left bg-white/5">
          <h3 className="text-white font-semibold text-sm mb-2">
            {video.title}
          </h3>
          <p className="text-gray-100 text-xs leading-snug">
            {video.desc}
          </p>
            </div>
          </div>
        ))}
        </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="w-full py-20 px-6 bg-white h-[75vh] flex items-center justify-center">
        <div className="max-w-6xl w-full mx-auto px-4 flex flex-col gap-6 items-center justify-center">
          <div className="mb-12">
            {/* <div className="w-16 h-1 bg-red-600 mb-4"></div> */}
            <h2 className="text-6xl font-black text-center text-red-600">RESEARCH</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 text-center w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 items-center justify-items-center w-full">
              <div className="relative overflow-hidden rounded shadow-lg w-full h-full flex items-center justify-center">
                <img
                  src="./robot_1.png"
                  alt="Intelligent Systems and Robotics"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-rows-3 gap-4 justify-items-center w-full h-full">
                {["/robot.png", "/robot.png"].map((thumb, i) => (
                  <div key={i} className="overflow-hidden rounded shadow w-full h-full flex items-center justify-center">
                    <img
                      src={thumb}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts / Stats Section */}
      <section
        className="relative w-full flex h-[80vh] items-center justify-center"
        style={{
          backgroundImage: 'url("/image_iitd.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-700/90 to-red-700/40 z-0"></div>

        <div className="relative max-w-6xl w-full px-6 z-10 flex flex-col items-center">
          <div className="mb-8 text-center">
        <div className="w-16 h-1 bg-white mb-4 mx-auto"></div>
        <h2 className="text-5xl font-black text-white">FUN FACTS</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
        {[
          { number: "106", label: "HAPPY\nCLIENTS" },
          { number: "198", label: "WEBSITES\nLAUNCHED" },
          { number: "506", label: "SOCIAL\nCAMPAIGNS" },
          { number: "1603", label: "CUPS OF\nCOFFEE" },
        ].map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl md:text-5xl font-black text-white mb-2">
          {stat.number}
            </div>
            <p className="text-gray-100 text-xs md:text-sm font-semibold whitespace-pre-line">
          {stat.label}
            </p>
          </div>
        ))}
          </div>
        </div>
      </section>
    </div>
  );
}