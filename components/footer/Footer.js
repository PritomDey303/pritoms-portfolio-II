import {FaFacebook, FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';

export default function Footer () {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center p-6 py-8 mt-10">
      <div className="container mx-auto">
        <p className="text-lg font-semibold text-white">
          © 2025 Pritom Dey. All rights reserved.
        </p>
        {/* <div className="flex justify-center space-x-6 mt-3">
          <a 
            href="https://facebook.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl text-gray-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a 
            href="mailto:your.email@example.com" 
            className="text-xl text-gray-400 hover:text-red-500 transition-all duration-300 transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div> */}
      </div>
    </footer>
  );
}
