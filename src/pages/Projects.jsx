// Projects.js
import React from 'react';
import prjImg1 from '../assets/rubikainterior-img.png';
import prjImg2 from '../assets/portfolio-img.png';
import ProjectSection from '../components/ProjectSection';

const Projects = () => {
  const projectObj = [
    {
      image: prjImg1,
      title: 'Rubika Interior Website',
      des: 'Rubika Interior, is a dedicated website to transforming your home into a masterpiece. With a strong commitment to craftsmanship, integrity, and Implemented custom features, including a footer, scroll-triggered animations, and service detail pages, enhancing user engagement.',
      index: '01',
    },
    {
      image: prjImg2,
      title: 'Personal Portfolio Website',
      des: 'A modern and responsive personal portfolio built with React.js, highlighting my skills, projects, and expertise. Features include smooth animations, reusable components, interactive navigation, and a dynamic project showcase, demonstrating my proficiency in React.js and front-end development.',
      index: '02',
    },
  ];

  return (
    <div id='projects' className='w-full px-[5%] md:px-[10%] py-10 scroll-mt-20'>
      <div className="w-full font-sora">
        <h1 className="text-[28px] md:text-[38px] text-center pt-2">
          <span className="opacity-90">My </span><span className="font-extrabold">Projects</span>
        </h1>

        <div className="mt-7">
          {projectObj.map((project, index) => (
            <ProjectSection
              key={index}
              image={project.image}
              title={project.title}
              des={project.des}
              index={project.index}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;