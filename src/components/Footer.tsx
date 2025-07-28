import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 border-b border-gray-700 pb-8">
        {/* Profile and About */}
        <div className="flex flex-col max-w-sm">
          <div className="flex items-center gap-4">
            <div className="bg-violet-600 rounded-xl w-12 h-12 flex items-center justify-center text-xl font-bold">
              H
            </div>
            <div>
              <h2 className="text-xl font-bold">Hrishabh Gupta</h2>
              <p className="text-sm text-gray-300">Student & AI Enthusiast</p>
            </div>
          </div>
          <p className="mt-4 text-gray-400">
            Sharing thoughts and insights through the power of words. Join me on this journey of learning, technology, and personal growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <FaGithub />
              <a href="https://github.com/hrishabh1103/" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/hrishabh1103/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:hrishabh1104@gmail.com" className="hover:text-white">Email</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-lg">📝</span>
              <a href="https://hrishabhblog.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-white">Blog</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm">
        © 2025 Hrishabh Gupta. Made with <FaHeart className="inline text-red-500 mx-1" /> in India
      </div>
    </footer>
  );
};

export default Footer;