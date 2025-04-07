'use client';
import Image from 'next/image';

export default function About () {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row items-center justify-between bg-gray-100 px-4 py-12 lg:px-20 lg:py-20"
    >
      {/* Profile Image - Full width on mobile, fixed size on desktop */}
      <div className="relative w-full max-w-xs mx-auto lg:w-[400px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg mb-8 lg:mb-0">
        <Image
          src="https://i.ibb.co.com/4wF60zTs/put-removebg-preview.png"
          width={400}
          height={400}
          className="object-cover w-full h-full"
          alt="Profile photo"
          priority
        />
      </div>

      {/* About Me Text Content with justified text */}
      <div className="lg:ml-10 max-w-2xl text-justify">
        <h2 className="text-3xl lg:text-4xl font-bold text-neutral mb-4 text-left">
          About Me
        </h2>
        <p className="text-gray-600 text-base lg:text-lg mb-4">
          I am a passionate web developer with experience in creating dynamic and user-friendly web applications.
          My expertise lies in frontend development using modern frameworks like React and Next.js, ensuring
          seamless user experiences.
        </p>
        <p className="text-gray-600 text-base lg:text-lg mb-6">
          My goal is to craft visually appealing and highly functional web applications that leave a lasting impact.
          When I'm not coding, I enjoy exploring UI/UX design trends and optimizing performance for the best user engagement.
        </p>
        <div className="text-left">
          <a href="#contact">
            <button className="px-6 py-3 cursor-pointer bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
