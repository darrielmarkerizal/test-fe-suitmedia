import { Suspense } from "react";
import HeroBanner from "../components/HeroBanner";
import BlogGrid from "../components/BlogGrid";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroBanner
        title="Ideas"
        subtitle="Where all our great things begin"
        backgroundImage="https://picsum.photos/1920/1080?random=1"
        height="100vh"
      />

      <Suspense
        fallback={
          <div className="bg-white py-16 relative z-10">
            <div className="container mx-auto px-6">
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
              </div>
            </div>
          </div>
        }
      >
        <BlogGrid />
      </Suspense>
    </main>
  );
}
