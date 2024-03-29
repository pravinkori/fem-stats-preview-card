import styles from "./Card.module.css";
import { useState, useEffect } from "react";
import desktopImg from "/src/assets/images/image-header-desktop.jpg";
import mobileImg from "/src/assets/images/image-header-mobile.jpg";

function Card() {
  // State to keep track of window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect to update window width when resizing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine which image to show based on window width
  const imageSrc = windowWidth >= 1024 ? desktopImg : mobileImg;

  // Data for statistics section
  const statsData = [
    { number: "10k+", heading: "companies" },
    { number: "314", heading: "templates" },
    { number: "12M+", heading: "queries" },
  ];

  return (
    <article className={styles.card}>
      {/* Picture element for responsive images */}
      <picture className={styles.card__img}>
        <source srcSet={desktopImg} media="(min-width: 1024px)" />
        <img src={imageSrc} alt="Employees working in office" />
      </picture>
      <div className={styles.card__content}>
        {/* Title */}
        <h1 className={styles.card__title}>
          Get <span>insights</span> that help your business grow.
        </h1>

        {/* Description */}
        <p className={styles.card__description}>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>

        {/* Statistics section */}
        <div className={styles["flex-group"]}>
          {statsData.map((stat, index) => (
            <div className={styles.card__stats} key={index}>
              <p className={styles["card__stats-numbers"]}>{stat.number}</p>
              <p className={styles["card__stats-headings"]}>{stat.heading}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default Card;
