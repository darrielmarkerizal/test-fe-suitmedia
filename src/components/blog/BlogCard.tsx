import Image from "next/image";
import { BlogPost } from "../../types/blog";
import {
  formatDate,
  stripHtml,
  getFallbackImage,
  getImageUrl,
} from "../../utils/blogUtils";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const imageUrl = getImageUrl(post);
  const fallbackImage = getFallbackImage(post.id);

  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200">
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          onError={(e) => {
            console.log("Image failed to load, using fallback:", imageUrl);
            const target = e.currentTarget as HTMLImageElement;
            if (target.src !== fallbackImage) {
              target.src = fallbackImage;
            }
          }}
        />
      </div>

      <div className="p-4">
        <time className="text-xs text-gray-500 uppercase tracking-wide">
          {formatDate(post.published_at)}
        </time>

        <h3 className="text-gray-800 font-semibold mt-2 mb-3 leading-tight">
          <span className="line-clamp-3 text-sm">{post.title}</span>
        </h3>

        <p className="text-gray-600 text-xs line-clamp-2">
          {stripHtml(post.content).slice(0, 100)}...
        </p>
      </div>
    </article>
  );
};

export default BlogCard;
