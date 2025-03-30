'use client';
import {FaGraduationCap, FaAward} from 'react-icons/fa';

const educationData = {
  education: {
    title: 'Education',
    icon: <FaGraduationCap className="text-3xl text-purple-600" />,
    color: 'purple-600',
    items: [
      {
        degree: 'Bachelor of Science in Computer Science and Engineering(CSE)',
        institution: 'University of Chittagong',
        year: '2024',
      },
    ],
  },
  certifications: {
    title: 'Certifications',
    icon: <FaAward className="text-3xl text-green-600" />,
    color: 'green-600',
    items: [
      {
        title: 'Complete Web Development Course',
        institution: 'Programming Hero',
        year: '2020',
      },
      {
        title: 'MERN Stack Web Development Career Path - Batch 04',
        institution: 'Interactive Care',
        year: '2025',
      },
    ],
  },
};

export default function EducationAndCertifications () {
  return (
    <div
      id="education"
      className="bg-gray-100 px-6 py-10 md:py-16 lg:py-20 flex flex-col items-center"
    >
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral mb-8 md:mb-12">
        Education & Certifications
      </h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 w-full max-w-5xl px-4 md:px-8">
        {/* Education Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-purple-600 mb-4 flex items-center gap-2">
            {educationData.education.icon} {educationData.education.title}
          </h3>
          {educationData.education.items.map ((edu, index) => (
            <div
              key={index}
              className="relative border-l-4 border-purple-600 pl-6 mb-6"
            >
              <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-2.5 top-1" />
              <h4 className="text-lg sm:text-xl font-semibold">{edu.degree}</h4>
              <p className="text-gray-500 text-sm sm:text-base">
                {edu.institution}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">{edu.year}</p>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-green-600 mb-4 flex items-center gap-2">
            {educationData.certifications.icon}
            {' '}
            {educationData.certifications.title}
          </h3>
          {educationData.certifications.items.map ((cert, index) => (
            <div
              key={index}
              className="relative border-l-4 border-green-500 pl-6 mb-6"
            >
              <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-2.5 top-1" />
              <h4 className="text-lg sm:text-xl font-semibold">{cert.title}</h4>
              <p className="text-gray-500 text-sm sm:text-base">
                {cert.institution}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
