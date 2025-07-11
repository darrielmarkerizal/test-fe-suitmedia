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

      <BlogGrid />
    </main>
  );
}
