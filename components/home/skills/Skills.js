'use client';
import {useEffect, useRef, useState} from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
  SiExpress,
} from 'react-icons/si';
import {GiBrain} from 'react-icons/gi';

export default function Skills () {
  const progressBarsRef = useRef ([]);
  const [animated, setAnimated] = useState (false);

  // Skills data with icons
  const skills = [
    {
      name: 'HTML5',
      level: '95%',
      icon: <FaHtml5 className="text-orange-500" />,
    },
    {name: 'CSS3', level: '90%', icon: <FaCss3Alt className="text-blue-500" />},
    {
      name: 'JavaScript',
      level: '85%',
      icon: <FaJs className="text-yellow-500" />,
    },
    {name: 'React', level: '80%', icon: <FaReact className="text-blue-400" />},
    {
      name: 'Next.js',
      level: '75%',
      icon: <SiNextdotjs className="text-black dark:text-white" />,
    },
    {
      name: 'Tailwind CSS',
      level: '85%',
      icon: <SiTailwindcss className="text-cyan-400" />,
    },
    {
      name: 'Node.js',
      level: '70%',
      icon: <FaNodeJs className="text-green-500" />,
    },
    {
      name: 'Express.js',
      level: '75%',
      icon: <SiExpress className="text-gray-800 dark:text-gray-200" />,
    },
    {
      name: 'MongoDB',
      level: '75%',
      icon: <SiMongodb className="text-green-600" />,
    },
    {
      name: 'TypeScript',
      level: '75%',
      icon: <SiTypescript className="text-blue-600" />,
    },
    {name: 'Git', level: '80%', icon: <FaGitAlt className="text-orange-600" />},
    {
      name: 'Problem Solving',
      level: '60%',
      icon: <GiBrain className="text-purple-600" />,
    },
  ];

  useEffect (() => {
    const observer = new IntersectionObserver (
      entries => {
        entries.forEach (entry => {
          if (entry.isIntersecting) {
            setAnimated (true);
            observer.unobserve (entry.target);
          }
        });
      },
      {threshold: 0.1} // Lower threshold for mobile
    );

    if (progressBarsRef.current) {
      progressBarsRef.current.forEach (el => {
        if (el) observer.observe (el);
      });
    }

    return () => observer.disconnect ();
  }, []);

  return (
    <section
      id="skills"
      className="bg-base-100 px-4 py-10 sm:px-6 lg:px-20 lg:py-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral text-center mb-8 sm:mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skills.map ((skill, index) => (
            <div key={index} className="flex flex-col gap-1 sm:gap-2">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-2xl sm:text-3xl">{skill.icon}</span>
                <p className="text-base sm:text-lg font-medium">{skill.name}</p>
              </div>
              <div
                ref={el => (progressBarsRef.current[index] = el)}
                className="w-full bg-gray-200 rounded-full h-2 sm:h-3"
              >
                <div
                  className="bg-purple-600 h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: animated ? skill.level : '0%',
                    transitionDelay: `${index * 75}ms`, // Faster on mobile
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
