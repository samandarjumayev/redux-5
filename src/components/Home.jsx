'use client';

import { useState } from 'react';
import { Search, ShoppingCart, Star, Users, Globe, Zap, Smartphone } from 'lucide-react';
import Header from '../components/Header';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    { 
      id: 1, 
      title: 'UI DESIGN FOR BEGINNERS', 
      instructor: 'Adobe Illustrator Scratch Course', 
      price: 26.92, 
      originalPrice: 32.00, 
      badge: 'NEW', 
      badgeColor: 'bg-red-500', 
      cardBg: 'bg-red-500',
      image: 'https://images.pexels.com/photos/695730/pexels-photo-695730.jpeg'
    },
    { 
      id: 2, 
      title: 'VUE JAVASCRIPT COURSE', 
      instructor: 'Adobe Illustrator Scratch Course', 
      price: 26.92, 
      originalPrice: 32.00, 
      badge: 'NEW', 
      badgeColor: 'bg-blue-500', 
      cardBg: 'bg-blue-500',
      image: 'https://images.pexels.com/photos/11035366/pexels-photo-11035366.jpeg'
    },
    { 
      id: 3, 
      title: 'MOBILE DEV REACT NATIVE', 
      instructor: 'Adobe Illustrator Scratch Course', 
      price: 26.92, 
      originalPrice: 32.00, 
      badge: 'NEW', 
      badgeColor: 'bg-green-500', 
      cardBg: 'bg-green-500',
      image: 'https://images.pexels.com/photos/7213434/pexels-photo-7213434.jpeg'
    },
    { 
      id: 4, 
      title: 'WEBSITE DEV ZERO TO HERO', 
      instructor: 'Adobe Illustrator Scratch Course', 
      price: 26.92, 
      originalPrice: 32.00, 
      badge: 'NEW', 
      badgeColor: 'bg-purple-500', 
      cardBg: 'bg-purple-500',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg'
    },
  ];

  const trendingCourses = [
    { 
      id: 5, 
      title: 'Design Fundamentals', 
      instructor: 'Professional Design', 
      price: 26.92, 
      rating: 4.5, 
      students: 1200,
      image: 'https://images.pexels.com/photos/3747279/pexels-photo-3747279.jpeg'
    },
    { 
      id: 6, 
      title: 'Ionic - Build iOS, Android & Web...', 
      instructor: 'Web Development', 
      price: 26.92, 
      rating: 4.8, 
      students: 2100,
      image: 'https://images.pexels.com/photos/7568297/pexels-photo-7568297.jpeg'
    },
    { 
      id: 7, 
      title: 'Masterclass in Design Thinking', 
      instructor: 'Design Course', 
      price: 26.92, 
      rating: 4.9, 
      students: 3000,
      image: 'https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg'
    },
    { 
      id: 8, 
      title: 'Bootcamp: Vue.js Web Framework', 
      instructor: 'Web Development', 
      price: 26.92, 
      rating: 4.7, 
      students: 1500,
      image: 'https://images.pexels.com/photos/33607952/pexels-photo-33607952.png'
    },
  ];

  const webinars = [
    { 
      id: 9, 
      title: 'iOS 13 SWIFT & iOS DEVELOPMENT', 
      badge: 'NEW', 
      bgColor: 'bg-yellow-400',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg'
    },
    { 
      id: 10, 
      title: 'Bootcamp: Vue.js Web Framework', 
      badge: 'LIVE', 
      bgColor: 'bg-gray-700',
      image: 'https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg'
    },
    { 
      id: 11, 
      title: 'WEBSITE DEV ZERO TO HERO', 
      badge: 'NEW', 
      bgColor: 'bg-purple-500',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg'
    },
    { 
      id: 12, 
      title: 'LEARN PROGRAM IN 30 DAYS', 
      badge: 'LIVE', 
      bgColor: 'bg-blue-400',
      image: 'https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg'
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2330137/pexels-photo-2330137.jpeg)',
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
                <option>Frontend</option>
                <option>Backend</option>
                <option>FullStack</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>Topic</option>
                <option>React JS</option>
                <option>Node JS</option>
                <option>Vue JS</option>
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
                <div 
                  className={`${course.cardBg} h-40 relative flex items-center justify-center text-white font-bold text-xl overflow-hidden`}
                >
                  <img 
                    src={course.image || "/placeholder.svg"} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
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
              <img src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=300&h=300&fit=crop" alt="Colorful shapes" className="w-full h-full object-cover rounded-full opacity-60" />
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
                className="h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(${trendingCourses[2].image})`,
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
                  <div
                    className="h-32 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${course.image})`,
                    }}
                  />
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
                        <span>{course.students}k</span>
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
                  className={`${webinar.bgColor} h-32 bg-cover bg-center`}
                  style={{
                    backgroundImage: `url(${webinar.image})`,
                  }}
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-sm flex-1">{webinar.title}</h3>
                    <span className={`text-xs font-bold px-2 py-1 rounded whitespace-nowrap ml-2 ${
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

      
    </div>
  );
}
