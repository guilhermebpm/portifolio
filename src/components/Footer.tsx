export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">

        {/* Left Side */}

        <nav className="flex gap-6 mb-4 md:mb-0">
          <a href="/" className="hover:text-black ">Home</a>
          <a href="/about" className="hover:text-black ">About</a>
          <a href="/projects" className="hover:text-black ">Projects</a>
          <a href="/uses" className="hover:text-black ">Uses</a>
        </nav>

        {/* Right Side */}

        <p className="text-zinc-400 text-center md:text-right">
          © {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}