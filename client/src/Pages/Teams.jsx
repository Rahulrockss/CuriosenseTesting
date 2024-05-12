import React from "react";
import "./Teams.css";
import TeamCard from "../Components/TeamCard";
import Team1 from "../Images/Teams/Team1.jpeg";
import Team2 from "../Images/Teams/Team2.jpeg";
import Team3 from "../Images/Teams/Team3.jpeg";
import Team4 from "../Images/Teams/Team4.jpeg";
import Team5 from "../Images/Teams/Team5.jpg";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Teams = () => {
  const teamMembers = [
    {
      name: "Darshan Reddy G",
      role: "Managing Director",
      image: `${Team1}`,
      bio: "Darshan Reddy G, a proficient MBA graduate, guides the company to triumph by seamlessly blending expertise in marketing, finance, supply chain, and innovation. His visionary leadership catalyzes strategic growth initiatives and ensures organizational excellence.",
    },
    {
      name: "Dr Muthukumar Chockalingam",
      role: "Director, R&D",
      image: `${Team2}`,
      bio: "Dr. Muthukumar Chockalingam is an Associate Professor of Chemistry at Acharya Institute of Technology, Bengaluru, and concurrently holds the position of Director of Research and Development at the startup. His active involvement in cutting-edge research extends across the intersection of technology and well-being, spanning healthcare, diagnostics, education, mental health, and sensor technology. Dr. Muthukumar leads the charge in initiating innovative projects within these diverse domains.",
    },
    {
      name: "Krishna Raju R",
      role: "Chief Technology Officer",
      image: `${Team3}`,
      bio: "Krishna Raju R, Chief Technology Officer, excels in product design, hardware development, and robotics. A mechatronics engineer, proficient in 3D printing, CAD, and effective project management, contributing to innovative solutions at the intersection of technology and engineering.",
    },
    {
      name: "Dr. B. Jagan Mohan",
      role: "Design Researcher",
      image: `${Team5}`,
      bio: "Dr. B. Jagan Mohan, a Design and Technology enthusiast and design researcher, holds a Ph.D. in Visual Arts with a specialization in digital media and visualization. With 18 years in academia, specializing in Multimedia Design and Animation, currently working as an Associate Professor, in Acharya School of Design. His interest includes user-centric product design. He excels as a design consultant, bringing both expertise and passion to the field.",
    },
    {
      name: "Rakesh Kumar",
      role: "Software Engineer",
      image: `${Team4}`,
      bio: "Rakesh Kumar, SDE, a computer science engineer and professional web developer, combines technical expertise with creativity to craft dynamic and efficient websites. His skills contribute to seamless digital experiences, reflecting a passion for innovation.",
    },
    // Add more team members as needed
  ];

  return (
    <>
    <NavBar/>
      <div className="teamSection">
        <div className="title">Meet Our Team</div>
        <div className="app">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Teams;
