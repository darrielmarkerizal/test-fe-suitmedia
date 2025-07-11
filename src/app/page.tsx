import HeroBanner from "../components/HeroBanner";
import BlogGrid from "../components/BlogGrid";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner - Full viewport height, starts from top */}
      <HeroBanner
        title="Ideas"
        subtitle="Where all our great things begin"
        backgroundImage="https://picsum.photos/1920/1080?random=1"
        height="100vh"
      />

      {/* Blog Grid Component */}
      <BlogGrid />

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
