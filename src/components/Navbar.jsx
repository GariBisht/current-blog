import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-4 py-6 flex gap-6">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/blog" className="hover:underline">Blog</Link>
    </nav>
  );
}