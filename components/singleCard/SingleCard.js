import Image from 'next/image';

export default function SingleCard({project, setSelectedProject}) {
  const handleClick = () => {
    setSelectedProject (project);
  };

  return (
    <div className="w-full sm:w-80 md:w-96 bg-white shadow-sm rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
      <figure>
        <Image
          src={project.thumbnail}
          alt={project.name}
          width={400}
          height={250}
          className="object-cover w-full h-56"
        />
      </figure>
      <div className="p-4 text-left">
        <h2 className="text-xl font-bold text-gray-900">{project.name}</h2>
        <p className="text-gray-600 mt-2 text-justify">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.technologies.map ((tech, index) => (
            <span
              key={index}
              className="bg-[#b25af1] text-white px-2 py-1 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4">
          <div
            onClick={handleClick}
            className="font-bold text-[#9810FA] relative transition-all duration-300 inline-block
                       before:content-[''] before:absolute before:w-full before:h-[2px] 
                       before:bg-[#9810FA] before:bottom-0 before:left-0 before:scale-x-0 
                       before:transition-transform before:duration-300 hover:before:scale-x-100 cursor-pointer"
          >
            Let's Explore →
          </div>
        </div>
      </div>
    </div>
  );
}
