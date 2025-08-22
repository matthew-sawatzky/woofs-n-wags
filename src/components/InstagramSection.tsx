import React from "react";

interface InstagramPost {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
  thumbnail_url?: string;
}

interface InstagramPostCardProps {
  post: InstagramPost;
}

const InstagramPostCard: React.FC<InstagramPostCardProps> = ({ post }) => {
  const truncateCaption = (caption: string, maxLength: number = 100) => {
    if (caption.length <= maxLength) return caption;
    return caption.substring(0, maxLength) + "...";
  };

  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:shadow-lg transition-all duration-300">
        {/* Image */}
        <img
          src={post.media_url}
          alt={post.caption || "Instagram post"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Video indicator */}
        {post.media_type === "VIDEO" && (
          <div className="absolute top-2 right-2">
            <div className="bg-black bg-opacity-60 rounded-full p-1">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Carousel indicator */}
        {post.media_type === "CAROUSEL_ALBUM" && (
          <div className="absolute top-2 right-2">
            <div className="bg-black bg-opacity-60 rounded-full p-1">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21" />
              </svg>
            </div>
          </div>
        )}

        {/* Hover overlay with caption */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end p-3 opacity-0 group-hover:opacity-100">
          {post.caption && (
            <p className="text-white text-sm font-medium leading-relaxed">
              {truncateCaption(post.caption)}
            </p>
          )}
        </div>
      </div>
    </a>
  );
};

interface InstagramSectionProps {
  posts: InstagramPost[];
  loading: boolean;
  error: string | null;
}

const InstagramSection: React.FC<InstagramSectionProps> = ({
  posts,
  loading,
  error,
}) => {
  if (loading) {
    return (
      <section id="instagram" className="py-12 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-2 text-gray-800">
            Follow Us on Instagram
          </h3>
          <p className="text-center text-gray-600 mb-8">
            See what our furry friends are up to every day!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-200 rounded-lg animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="instagram" className="py-12 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Follow Us on Instagram
        </h3>
        <p className="text-center text-gray-600 mb-8">
          See what our furry friends are up to every day!
        </p>

        {error && (
          <div className="text-center mb-6">
            <p className="text-amber-600 text-sm">
              Showing sample posts - {error}
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <InstagramPostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/woofsnwags/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow @woofsnwags
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
