const posts = [
    { title: "Getting Started with React", date: "April 17, 2025", slug: "getting-started" },
    { title: "Why I Love Tailwind v4", date: "April 18, 2025", slug: "tailwind-v4" },
  ];
  
  export default function Blog() {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-semibold mb-4">Blog Posts</h2>
        <ul className="space-y-4">
          {posts.map((post, index) => (
            <li key={index}>
              <a href={`/blog/${post.slug}`} className="text-xl text-blue-600 hover:underline">
                {post.title}
              </a>
              <p className="text-sm text-gray-500">{post.date}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  