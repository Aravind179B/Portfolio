// ProjectSection.js
import React from "react";
import { IoOpenOutline } from "react-icons/io5";

const ProjectSection = ({ index, image, title, des, reverse }) => {
  return (
    <div className="w-full h-auto flex flex-col-reverse md:flex-row font-sora mt-6 md:h-[420px]">
      {reverse ? (
        <>
          <div className="w-full md:w-1/2 h-full flex justify-center items-center mt-4 md:mt-0">
            <img
              src={image}
              alt="projectImg"
              className="w-[90%] md:w-[470px] h-[200px] lg:ml-10 md:h-[300px] border border-gray-300 rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 h-full flex items-center ">
            <div className="w-[90%] mx-auto md:mr-[15%] lg:ml-20">
              <h1 className="text-[28px] md:text-[37px] font-extrabold">{index}</h1>

              <h1 className="text-[20px] md:text-[30px] font-bold pt-3">{title}</h1>

              <p className="text-[14px] md:text-[15px] font-light text-custom-neutral w-full md:w-[95%] pt-4">
                {des}
              </p>

              <a href="https://github.com/Aravind179B/Portfolio" target="_blank" rel="noopener noreferrer">
                <IoOpenOutline size={20} className="mt-4" />
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full md:w-1/2 h-full flex items-center">
            <div className="w-[90%] mx-auto md:ml-[15%]">
              <h1 className="text-[28px] md:text-[37px] font-extrabold">{index}</h1>

              <h1 className="text-[20px] md:text-[30px] font-bold pt-3">{title}</h1>

              <p className="text-[14px] md:text-[15px] font-light text-custom-neutral w-full md:w-[95%] pt-4">
                {des}
              </p>
              <a href=" https://github.com/Aravind179B/Interior" target="_blank" rel="noopener noreferrer">
                <IoOpenOutline size={20} className="mt-4" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-full flex justify-center items-center mt-4 md:mt-0">
            <img
              src={image}
              alt="projectImg"
              className="w-[90%] md:w-[470px] h-[200px] md:h-[300px] border border-gray-300 rounded-lg"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectSection;
