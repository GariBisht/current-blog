import posts from "../data/posts";
import BlogCard from "../components/BlogCard";
//import { Link } from "react-router-dom";

export default function Home() {
  return (
    
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
        👋 Welcome to My Blogs 👩‍💻
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-12">
        Insights, tutorials, and stories from a frontend developer.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  </div>



       
    
  
  );
}




 {/* <Link
          to="/blog"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg"
        >
          Read My Blog
        </Link> */}