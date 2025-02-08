import React from "react";

const Resume = () => {
  return (
    // <pre className="text-purple-400">
    //   {`// Download my resume`}
    //   <br />
    //   {`window.location.href = "/resume.pdf";`}
    // </pre>
    <object data="/resume.pdf" type="application/pdf" width="100%" height="100%">
    <p>Alternative text - include a link <a href="resume.pdf">to the PDF!</a></p>
</object>
  );
};

export default Resume;
