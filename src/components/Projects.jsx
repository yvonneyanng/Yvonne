import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import computer from "../assets/computer.jpg";
import images from "../assets/images.jpeg";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "portfolio website",
      description: "two",
      image: images,
    },
    {
      title: "movie reccomendation system",
      description: "two",
      image: images,
    },
    {
      title: "AI chatbot",
      description: "two",
      image: images,
    },
  ];

  const carouselPJ = [
    {
      title: "portfolio website",
      description: "two",
      image: computer,
    },
    {
      title: "movie reccomendation system",
      description: "two",
      image: computer,
    },
    {
      title: "AI chatbot",
      description: "two",
      image: computer,
    },
  ];

  return (
    <div class="bg-cyan-600 text-left text-white">
      <h1>Projects</h1>

      {/* displaying as carouasel */}
      <div class="flex w-100 h-50 mx-20">
        <Carousel
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
        >
          {carouselPJ.map((key, i) => {
            return (
              <div className="content">
                <img
                  src={carouselPJ[i].image}
                  alt={key}
                  className="content-image"
                />
                <div className="content-mask"></div>
                <h1 className="content-title">{carouselPJ[i].title}</h1>
              </div>
            );
          })}
        </Carousel>
      </div>

      {/* displaying as cards */}
      <div class="flex flex-wrap bg-red-400 items-center">
        {projects.map((key, i) => {
          return (
            <div>
              <h1>{projects[i].title}</h1>
              <img src={projects[i].image} alt={key} className="mr-5" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
