import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0); 

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 830);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.projectsWrapper}>
        {!isMobile ? (
          <div className={styles.projects}>
            {projects.map((project, id) => (
              <ProjectCard key={id} project={project} />
            ))}
          </div>
        ) : (
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
            style={{
              "--swiper-pagination-color": "#00FFFF",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "8px",
              "--swiper-pagination-bullet-horizontal-gap": "6px"
            }}
          >
            {projects.map((project, id) => (
              <SwiperSlide key={id}>
                <ProjectCard project={project} isActive={activeSlideIndex === id} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};
