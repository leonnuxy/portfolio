import React, { useRef, useEffect, useCallback } from 'react';

const experienceData = [
  {
    title: "Software Engineer(Cloud & Data)",
    period: "2022-2024",
    employer: "The Association of Professional Engineers and Geoscientists of Alberta (APEGA)",
    location: "Calgary",
    logo: `${import.meta.env.BASE_URL}logos/apega_logo.svg.png`,
    logoStyle: { transform: "scale(0.85)" },
    points: [
      "Migrated 10TB+ data to Azure Synapse, improving queries by 25%.",
      "Built scalable C#/.NET apps and responsive React UIs.",
      "Optimized REST APIs and Azure services, reducing costs.",
      "Tools: React, TypeScript, C#, Azure, Agile."
    ]
  },
  {
    title: "Web/Software Developer",
    period: "2021-2022",
    employer: "Spartan Controls",
    location: "Calgary",
    logo: `${import.meta.env.BASE_URL}logos/spartan_logo.png`,
    points: [
      "Developed React/JS frontends, raising accessibility by 20%.",
      "Maintained .NET and SQL services, 99.9% uptime.",
      "Automated AWS deployments, reducing deploy time.",
      "Tools: React, JS, .NET, SQL, AWS."
    ]
  },
  {
    title: "Cloud Data Analyst",
    period: "2020-2021",
    employer: "Parkland Fuel Corporation",
    location: "Calgary",
    logo: `${import.meta.env.BASE_URL}logos/parkland_logo.png`,
    points: [
      "Analyzed data with Python/SQL for insights.",
      "Built ML models, increasing ROI by 22%.",
      "Created Tableau/Power BI dashboards.",
      "Tools: Python, SQL, Tableau, Power BI."
    ]
  },
  {
    title: "IT Analyst Intern",
    period: "2019-2020",
    employer: "Alberta Health Services",
    location: "Calgary",
    logo: `${import.meta.env.BASE_URL}logos/ahs_logo.png`,
    logoStyle: { transform: "scale(0.85)" },
    points: [
      "Resolved 100+ tech issues, boosting satisfaction.",
      "Streamlined IT workflows in ServiceNow.",
      "Wrote technical documentation.",
      "Tools: ServiceNow, Troubleshooting."
    ]
  }
];

const ExperienceSection = () => {
  const carouselRef = useRef(null);
  const scrollInterval = useRef(null);
  const pauseTimeout = useRef(null);
  const scrollDirection = useRef(1); // 1 for right, -1 for left

  // Repeat the cards in the desired order for infinite scroll:
  // This is achieved by repeating the experienceData array.
  const cards = [
    ...experienceData,
    ...experienceData,
    ...experienceData // Repeat as needed for smooth infinite scroll
  ];

  // Function to start auto-scrolling
  const startAutoScroll = useCallback(() => {
    if (scrollInterval.current) return;
    scrollInterval.current = setInterval(() => {
      const container = carouselRef.current;
      if (!container) return;
      
      // Scroll by the direction factor (positive or negative)
      container.scrollLeft += (0.5 * scrollDirection.current);
      
      const cardWidth = 260 + 32; // Card width + gap
      
      // If reached right end, reverse direction to left
      if (container.scrollLeft >= (cardWidth * (cards.length - 5))) {
        scrollDirection.current = -1;
      }
      
      // If reached left end, reverse direction to right
      if (container.scrollLeft <= cardWidth) {
        scrollDirection.current = 1;
      }
    }, 20);
  }, [cards.length]);

  // Function to stop auto-scrolling
  const stopAutoScroll = useCallback(() => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  }, []);

  // On mount, start auto-scroll and set initial scroll position
  useEffect(() => {
    const container = carouselRef.current;
    if (container) {
      // Jump to first real card (skip ghost at start)
      const cardWidth = 260 + 32;
      container.scrollLeft = cardWidth;
    }
    startAutoScroll();
    return () => {
      stopAutoScroll();
      if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    };
  }, [startAutoScroll, stopAutoScroll]);

  // Update scroll handler for manual scrolling
  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;
    const cardWidth = 260 + 32;
    
    // Update direction based on manual scroll position
    if (container.scrollLeft >= (cardWidth * (cards.length - 5))) {
      scrollDirection.current = -1;
    } else if (container.scrollLeft <= cardWidth) {
      scrollDirection.current = 1;
    }
  };

  // Handle card click: pause, then resume after 3s
  const handleCardClick = () => {
    stopAutoScroll();
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => {
      startAutoScroll();
    }, 3000);
  };

  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-header">EXPERIENCE</h2>
      <div className="experience-carousel-wrapper">
        {/* Left gradient */}
        <div className="carousel-fade carousel-fade-left" />
        {/* Right gradient */}
        <div className="carousel-fade carousel-fade-right" />
        <div
          className="experience-carousel-container"
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {cards.map((exp, idx) => {
            // Extract tools from last point if it starts with "Tools:"
            let points = exp.points;
            let tools = [];
            if (points.length > 0 && typeof points[points.length - 1] === "string" && points[points.length - 1].startsWith("Tools:")) {
              const toolsStr = points[points.length - 1].replace("Tools:", "").trim();
              tools = toolsStr.split(",").map(t => t.trim());
              points = points.slice(0, points.length - 1);
            }
            return (
              <div
                className="experience-card"
                key={idx}
                onClick={handleCardClick}
                tabIndex={0}
              >
                <div className="experience-logo-container">
                  <img
                    src={exp.logo}
                    alt={`${exp.employer} logo`}
                    className="experience-logo"
                    style={exp.logoStyle}
                  />
                </div>
                {tools.length > 0 && (
                  <div className="experience-tools">
                    {tools.map((tool, i) => (
                      <span
                        key={i}
                        className="experience-tool-pill"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
                <div className="experience-row">
                  <h3 className="experience-title">{exp.title}</h3>
                </div>
                {/* Company, location, and date vertically spaced, but location/date on same line */}
                <div className="experience-company-location-date">
                  <span className="experience-employer">{exp.employer}</span>
                  <div className="experience-location-date-row">
                    <span className="experience-location">
                      <i className="fas fa-map-marker-alt"></i> {exp.location}
                    </span>
                    <span className="experience-period">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <div className="experience-points">
                  <ul
                    className="experience-description"
                  >
                    {points.slice(0, 4).map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

ExperienceSection.propTypes = {
  // Add any props if you decide to make this component accept props
};

export default ExperienceSection;
