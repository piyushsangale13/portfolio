import React from "react";

const About = () => {
  return (
    <pre className="text-orange-400">
      {`const aboutMe = {`}
      <br />
      {`  name: "Piyush Rajendra Sangale",`}
      <br />
      {`  college: "Indian Institute of Technology Mandi",`}
      <br />
      {`  skills: ["Fullstack development","AWS", "React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL"]`}
      <br />
      {`};`}
    </pre>
  );
};

export default About;
