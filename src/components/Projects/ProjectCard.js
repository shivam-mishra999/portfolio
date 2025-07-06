import React, { useState, useEffect } from "react";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  project: { title, imageSrc, description, skills, demo, source },
  isActive = true,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 95;

  const shouldTruncate = description.length > maxLength;
  const displayedDescription = isExpanded || !shouldTruncate
    ? description
    : `${description.slice(0, maxLength)}...`;

    useEffect(() => {
      if (!isActive) {
        setIsExpanded(false);
      }
    }, [isActive]);

  return (
    // <div className={styles.container}>
    <div
      className={`${styles.container} ${isExpanded ? styles.expandedMobile : ''}`}
    >
      <div className={styles.imageContainer}>
        <img
          src={imageSrc}
          alt={`Icon of ${title}`}
          className={styles.image}
        />
      </div>

      <div className={styles.detailsContainer}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>
          {displayedDescription}
          {shouldTruncate && (
            <button
              className={styles.toggleButton}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? " See less" : " See more"}
            </button>
          )}
        </p>

        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>

        <div className={styles.links}>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
