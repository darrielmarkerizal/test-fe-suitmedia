import { Suspense } from "react";
import BlogGrid from "../../components/BlogGrid";
import HeroBanner from "../../components/HeroBanner";

export default function Ideas() {
  return (
    <div className="min-h-screen">
      <HeroBanner
        title="Ideas"
        subtitle="Where all our great things begin"
        backgroundImage="https://picsum.photos/1920/1080?random=2"
      />
      <main className="relative z-10">
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
    </div>
  );
}
