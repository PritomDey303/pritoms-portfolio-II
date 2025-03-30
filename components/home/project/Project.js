'use client';
import React, {useState, useEffect} from 'react';
import {db, collection, getDocs} from '@/firebase'; // import the necessary firebase functions
import SingleCard from '@/components/singleCard/SingleCard';
import {motion} from 'framer-motion';
import {getProjects} from '@/databse/databse';

export default function Project () {
  const techFilters = [
    'All',
    'HTML/CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'React Native',
    'Flutter',
  ];

  const [activeFilter, setActiveFilter] = useState ('All');
  const [selectedProject, setSelectedProject] = useState (null);
  const [projects, setProjects] = useState ([]); // State for storing projects
  const [loading, setLoading] = useState (true); // State for loading indicator

  // Fetch projects from Firestore
  const fetchProjects = async () => {
    try {
      const projectData = await getProjects ();
      setProjects (projectData);
    } catch (error) {
      console.error ('Error fetching projects: ', error);
    } finally {
      setLoading (false);
    }
  };

  useEffect (() => {
    fetchProjects ();
  }, []);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter (project => project.technologies.includes (activeFilter));

  if (loading) {
    return <p>Loading projects...</p>;
  }

  return (
    <section
      id="project"
      className="bg-base-100 py-16 px-4 sm:px-6 lg:px-20 text-center"
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral mb-10"
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="mb-8"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
      >
        <div className="flex flex-wrap justify-center gap-3">
          {techFilters.map (tech => (
            <button
              key={tech}
              className={`px-4 py-2 text-xs sm:text-sm rounded-full font-medium transition-all duration-200 ${activeFilter === tech ? 'bg-[#9810FA] text-white shadow-lg' : 'bg-base-200 text-neutral hover:bg-base-300'}`}
              onClick={() => setActiveFilter (tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
      >
        {filteredProjects.map (project => (
          <SingleCard
            key={project.id}
            project={project}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </motion.div>

      {filteredProjects.length === 0 &&
        <motion.div
          className="py-12"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
        >
          <p className="text-lg text-neutral">
            No projects found using {activeFilter}.
          </p>
          <button
            onClick={() => setActiveFilter ('All')}
            className="mt-4 px-6 py-2 rounded-full bg-[#9810FA] text-white hover:bg-[#7a0dc7] transition-colors"
          >
            Show All Projects
          </button>
        </motion.div>}

        {selectedProject && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-6 backdrop-blur-lg">
    <motion.div
      className="max-w-4xl w-full bg-white text-gray-900 rounded-lg shadow-xl p-6 sm:p-10 relative overflow-y-auto max-h-[90vh]"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Close Button */}
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-4 right-4 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900 transition-all"
      >
        ✕
      </button>

      {/* Ensure selectedProject exists before rendering */}
      {selectedProject ? (
        <>
          {/* Modal Header */}
          <h1 className="text-3xl sm:text-4xl font-bold text-[#9810FA] mb-6 text-center">
            {selectedProject.name}
          </h1>
          <p className="text-gray-700 text-md text-center mb-8">
            {selectedProject.description}
          </p>

          {/* Modal Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* Key Features */}
            {selectedProject.keyFeatures && (
              <div className="bg-gray-100 p-5 rounded-lg shadow-md text-left">
                <h2 className="text-xl font-semibold text-[#9810FA] mb-3">
                  Key Features
                </h2>
                <ul className="list-disc pl-5 text-gray-800 space-y-2">
                  {selectedProject.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Used */}
            {selectedProject.technologies && (
              <div className="bg-gray-100 p-5 rounded-lg shadow-md text-left">
                <h2 className="text-xl font-semibold text-[#9810FA] mb-3">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#9810FA] text-white px-4 py-2 rounded-full text-sm font-medium shadow-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-6 mt-8 w-full">
            {selectedProject.frontend && (
              <a
                href={selectedProject.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#9810FA] text-white px-5 py-3 rounded-lg shadow-md hover:bg-[#7a0dc7] transition-all"
              >
                Frontend Code
              </a>
            )}
            {selectedProject.backend && (
              <a
                href={selectedProject.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 text-white px-5 py-3 rounded-lg shadow-md hover:bg-gray-900 transition-all"
              >
                Backend Code
              </a>
            )}
            {selectedProject.liveDemo && (
              <a
                href={selectedProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#9810FA] text-[#9810FA] px-5 py-3 rounded-lg shadow-md hover:bg-[#9810FA] hover:text-white transition-all"
              >
                Live Demo
              </a>
            )}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-700">No project selected</p>
      )}
    </motion.div>
  </div>
)}

    </section>
  );
}
