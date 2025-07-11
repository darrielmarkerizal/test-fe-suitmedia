import HeroBanner from "../components/HeroBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroBanner
        title="Ideas"
        subtitle="Where all our great things begin"
        backgroundImage="https://picsum.photos/1920/1080?random=1"
        height="100vh"
      />

      {/* Content Section - No top padding needed */}
      <div className="bg-white py-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to Suitmed
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover innovative solutions and creative ideas that drive your
              business forward.
            </p>
          </div>

          {/* Demo content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }, (_, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Image {i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Project {i + 1}
                </h3>
                <p className="text-gray-600">
                  This is a demo project description. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Content Section */}
      <div className="bg-gray-100 py-16 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {["Web Development", "Mobile Apps", "Digital Marketing"].map(
                (service, i) => (
                  <div key={i} className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">{service}</h3>
                    <p className="text-gray-600">
                      Professional {service.toLowerCase()} services tailored to
                      your needs.
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
