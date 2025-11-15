import { Search, ShoppingCart, LogIn } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
            M
          </div>
          <span className="font-bold text-lg text-gray-800">MyCourse.io</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-8 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for course"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-teal-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <ShoppingCart className="text-gray-600 cursor-pointer" size={20} />
          <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
            Login
          </button>
          <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 text-sm font-medium">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
