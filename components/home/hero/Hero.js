'use client';
import {FiDownload} from 'react-icons/fi';
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaFacebook,
} from 'react-icons/fa';
import Image from 'next/image';
import {contactInfo} from '@/utilityFunctions/contactInfo';

export default function Hero () {
  const {facebook, github, linkedin, email} = contactInfo;
  const handleScrollToProjects = e => {
    e.preventDefault ();
    const projectsSection = document.getElementById ('project');
    if (projectsSection) {
      projectsSection.scrollIntoView ({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div
      id="hero"
      className="flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-base-100 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto py-8 lg:py-12"
    >
      {/* Content Section */}
      <div className="w-full lg:w-1/2">
        <div className="mb-3">
          <p className="text-base sm:text-lg text-[#9810FA] font-medium">
            Hello, I'm
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral">
            Pritom Dey
          </h1>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral leading-tight mb-3">
          Full Stack <span className="text-[#9810FA]">Web Developer</span>
        </h2>

        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
          I architect and build responsive, performant web applications using modern technologies.
        </p>

        {/* Buttons - Column on mobile, row on lg+ */}
        <div className="flex flex-col lg:flex-row gap-3 w-full lg:w-auto mb-6">
          <a
            href="#project"
            onClick={handleScrollToProjects}
            className="w-full lg:w-auto"
          >
            <button className="w-full lg:w-auto px-6 py-3 bg-[#9810FA] text-white rounded-lg hover:bg-[#7a0dc7] font-medium text-center">
              See My Projects
            </button>
          </a>
          <button className="w-full lg:w-auto px-6 py-3 border-2 border-[#9810FA] text-[#9810FA] rounded-lg hover:bg-[#9810FA] hover:text-white flex items-center justify-center gap-2 font-medium">
            <FiDownload /> Download CV
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-3">
          <a
            href={linkedin}
            className="p-2 bg-gray-100 rounded-full hover:bg-[#9810FA] hover:text-white"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>
          <a
            href={github}
            className="p-2 bg-gray-100 rounded-full hover:bg-[#9810FA] hover:text-white"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href={facebook}
            className="p-2 bg-gray-100 rounded-full hover:bg-[#9810FA] hover:text-white"
          >
            <FaFacebook className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${email}`}
            className="p-2 bg-gray-100 rounded-full hover:bg-[#9810FA] hover:text-white"
          >
            <FaEnvelope className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Image Section - Hidden on mobile */}
      <div className="hidden lg:block w-[450px] h-[450px] relative rounded-xl overflow-hidden">
        <Image
          src="https://i.ibb.co.com/8nY55TMY/pt-flip.png"
          alt="Pritom Dey"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
