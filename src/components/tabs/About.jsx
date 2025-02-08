import React from "react";

const About = () => {
  return (
    <pre className="text-orange-400">
      {`const aboutMe = {`}
      <br />
      {`  name: "Your Name",`}
      <br />
      {`  role: "Full Stack Developer",`}
      <br />
      {`  skills: ["React", "Node.js", "AWS", "Tailwind CSS"]`}
      <br />
      {`};`}
    </pre>
  );
};

export default About;
