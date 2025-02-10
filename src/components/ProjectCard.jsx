import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { github } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  images,
  source_code_link,
}) => {

    const [displayed, setDisplayed] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setDisplayed((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000)
        return () => clearInterval(id);
    });

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className=""
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[560px] w-full"
      >
        <div
          className="bg-tertiary relative w-full h-[315px] cursor-pointer"
          onClick={() => window.open(source_code_link, "_blank")}
        >
          {images.map((image, index) => (
            <img
              key={`${name}-${index}`}
              src={image}
              alt="project_image"
              className={`w-full h-full transition-opacity object-contain object-center rounded-2xl absolute z-10 ${
                index === displayed ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[36px]">{name}</h3>
          <p className="mt-2 text-secondary text-[16px] min-h-[120px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
