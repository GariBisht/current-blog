
import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <h1 className="text-2xl text-gray-600 dark:text-gray-300">Post not found 😢</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
        <h1 className="text-4xl font-bold mt-4 mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover my-6 rounded-xl"
        />
        <div className="prose dark:prose-invert max-w-none">
          {post.content.split("\n").map((para, idx) => (
            <p key={idx} className="mb-4 whitespace-pre-wrap">{para.trim()}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
