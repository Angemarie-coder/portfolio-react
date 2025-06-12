import React from "react";
import "../styles/statsSection.css";
import statsData from "../data/statsData.json";

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats">
        {statsData.map((stat, index) => (
          <div key={index} className="stat">
            <img src={stat.icon} alt={stat.title} />
            <p>{stat.value}</p>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
