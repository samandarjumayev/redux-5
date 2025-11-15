'use client';

import { useState } from 'react';
import { Search, ShoppingCart, LogIn, Star, Users, Globe, Zap, Smartphone } from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    { id: 1, title: 'UI DESIGN FOR BEGINNERS', instructor: 'Adobe Illustrator Scratch Course', price: 26.92, originalPrice: 32.00, badge: 'NEW', badgeColor: 'bg-red-500' },
    { id: 2, title: 'VUE JAVASCRIPT COURSE', instructor: 'Adobe Illustrator Scratch Course', price: 26.92, originalPrice: 32.00, badge: 'NEW', badgeColor: 'bg-blue-500' },
    { id: 3, title: 'MOBILE DEV REACT NATIVE', instructor: 'Adobe Illustrator Scratch Course', price: 26.92, originalPrice: 32.00, badge: 'NEW', badgeColor: 'bg-green-500' },
    { id: 4, title: 'WEBSITE DEV ZERO TO HERO', instructor: 'Adobe Illustrator Scratch Course', price: 26.92, originalPrice: 32.00, badge: 'NEW', badgeColor: 'bg-purple-500' },
  ];

  const trendingCourses = [
    { id: 5, title: 'Design Fundamentals', instructor: 'Professional Design', price: 26.92, rating: 4.5, students: 1200 },
    { id: 6, title: 'Ionic - Build iOS, Android & Web...', instructor: 'Web Development', price: 26.92, rating: 4.8, students: 2100 },
    { id: 7, title: 'Masterclass in Design Thinking', instructor: 'Design Course', price: 26.92, rating: 4.9, students: 3000 },
    { id: 8, title: 'Bootcamp: Vue.js Web Framework', instructor: 'Web Development', price: 26.92, rating: 4.7, students: 1500 },
  ];

  const webinars = [
    { id: 9, title: 'iOS 13 SWIFT & iOS DEVELOPMENT', badge: 'NEW' },
    { id: 10, title: 'Bootcamp: Vue.js Web Framework', badge: 'LIVE' },
    { id: 11, title: 'WEBSITE DEV ZERO TO HERO', badge: 'NEW' },
    { id: 12, title: 'LEARN PROGRAM IN 30 DAYS', badge: 'LIVE' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-gray-800">MyCourse.io</span>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for course"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer" />
              <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
                Login
              </button>
              <button className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/placeholder.svg?height=600&width=1200&query=student-learning-headphones)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Learn something new everyday.</h1>
          <p className="text-xl text-gray-300">Become professionals and ready to join the world.</p>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">What do you want to learn?</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Find courses, skills, software, etc"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>Categories</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>Topic</option>
              </select>
              <button className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 flex items-center gap-2 whitespace-nowrap">
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Top Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Browse Our Top Courses</h2>
          <div className="flex justify-center gap-6 mb-12 flex-wrap">
            {['Design', 'Developer', 'Business', 'Marketing', 'Photography'].map((cat) => (
              <button key={cat} className="text-gray-600 hover:text-gray-900 font-medium">
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                <div className={`${course.badgeColor} h-32 relative flex items-end p-4`}>
                  <span className="absolute top-3 right-3 bg-white text-gray-800 px-2 py-1 rounded text-xs font-bold">
                    {course.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-xs mb-3">{course.instructor}</p>
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">(1.2k)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg">${course.price}</span>
                      <span className="text-gray-400 text-sm line-through ml-2">${course.originalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-2">Join Klevr now to get 35% off</h2>
            <p className="text-gray-400 mb-6">With our responsive themes and mobile and desktop apps, enjoy a seamless experience on any device so will you blog the best visitors</p>
            <button className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600">Join Klevr</button>
          </div>
          <div className="hidden lg:block">
            <div className="w-48 h-48">
              <img src="/colorful-geometric-shapes.jpg" alt="Colorful shapes" className="w-full h-full object-cover rounded-full opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Trending Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Trending Courses</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured Course */}
            <div className="lg:col-span-1 rounded-lg overflow-hidden shadow-lg">
              <div
                className="h-64 bg-cover bg-center relative"
                style={{
                  backgroundImage: 'url(/placeholder.svg?height=400&width=350&query=professional-woman)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <p className="text-sm mb-2">Ana Kursova</p>
                  <h3 className="text-2xl font-bold text-balance">Masterclass in Design Thinking, Innovation & Creativity</h3>
                </div>
              </div>
            </div>

            {/* Trending Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-6">
              {trendingCourses.slice(0, 4).map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-green-400 to-green-600" />
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-xs mb-2">{course.instructor}</p>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-gray-700">{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Users className="w-3 h-3" />
                        <span>{course.students}</span>
                      </div>
                    </div>
                    <div className="mt-3 font-bold text-gray-900">${course.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Webinar</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {webinars.map((webinar) => (
              <div key={webinar.id} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                <div
                  className="h-32"
                  style={{
                    backgroundImage: `url(/placeholder.svg?height=150&width=350&query=${webinar.badge === 'LIVE' ? 'purple' : 'yellow'}-webinar-banner)`,
                    backgroundSize: 'cover',
                  }}
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-sm">{webinar.title}</h3>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                      webinar.badge === 'LIVE' ? 'bg-purple-100 text-purple-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {webinar.badge}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs">Adobe Illustrator Scratch Course</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-balance">Get personal learning recommendations based on your needs</h2>
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900">Get Started</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <span className="font-bold">MyCourse.io</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3">Programming</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Web Programming</a></li>
                <li><a href="#" className="hover:text-white">Mobile Programming</a></li>
                <li><a href="#" className="hover:text-white">Java Beginner</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Design</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Adobe Illustrator</a></li>
                <li><a href="#" className="hover:text-white">Adobe Photoshop</a></li>
                <li><a href="#" className="hover:text-white">Design Logo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Courses</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Writing Course</a></li>
                <li><a href="#" className="hover:text-white">Photography</a></li>
                <li><a href="#" className="hover:text-white">Video Making</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex justify-between items-center">
            <p className="text-sm">Copyright © MyCourse 2024. All Rights Reserved</p>
            <div className="flex gap-4">
              <Globe className="w-5 h-5 cursor-pointer hover:text-white" />
              <Zap className="w-5 h-5 cursor-pointer hover:text-white" />
              <Smartphone className="w-5 h-5 cursor-pointer hover:text-white" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
