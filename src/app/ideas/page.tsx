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
        <BlogGrid />
      </main>
    </div>
  );
}
