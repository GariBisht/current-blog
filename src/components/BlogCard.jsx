// src/components/BlogCard.jsx
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{post.excerpt}</p>
        <Link to={`/blog/${post.id}`} className="text-blue-600 hover:underline font-medium">
          Read More →
        </Link>
      </div>
    </div>
  );
}
