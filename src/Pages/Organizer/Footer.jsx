import react from 'react';


export default function Footer() {
  return (
    <footer className="bg-gray-200 border-t border-[#ff531a] py-6 text-md text-gray-600">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left section */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          <a href="#" className="hover:text-gray-800">Status</a>
          <span>.</span>
          <a href="#" className="hover:text-gray-800">Terms</a>
          <span>.</span>
          <a href="#" className="hover:text-gray-800">Privacy</a>
          <span>.</span>
          <a href="#" className="hover:text-gray-800">Accessibility</a>
          <span>.</span>
          <a href="#" className="hover:text-gray-800">Cookies</a>
          <span>.</span>
          <a href="#" className="hover:text-gray-800">Manage Cookie Preferences</a>
          <span>.</span>
          <a href="#" className="hover:text-gray-800">Do Not Sell or Share My Personal Information</a>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <span>© 2025 Eventbrite</span>
        </div>
      </div>

      {/* Logo section */}
      <div className="max-w-7xl mx-auto px-4 mt-6 flex items-center justify-start gap-2">
        {/* Replace this SVG with your own logo */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-[#ff531a]">
          <path d="M0 0h32v32H0z" fill="none" />
          <path d="M16 4l8 8-8 8-8-8z" />
        </svg>
        <span className="text-xl font-bold text-[#ff531a]">eventbrite</span>
      </div>
    </footer>
  );
}
