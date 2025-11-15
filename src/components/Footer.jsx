import { Globe, Smartphone, Zap } from "lucide-react";

export default function Footer(){
    return <>
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
    </>
}