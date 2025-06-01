import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white py-4  fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 flex justify-center items-center space-x-8">
        <Link href="/" className="hover:text-gray-400 transition">Home</Link>
        <Link href="/about" className="hover:text-gray-400 transition">About</Link>
        <Link href="/works" className="hover:text-gray-400 transition">Works</Link>
        <Link href="/contact" className="hover:text-gray-400 transition">Contact</Link>
      </div>
    </nav>
  );
}
