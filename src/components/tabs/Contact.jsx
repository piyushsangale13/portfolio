import React from "react";

const Contact = () => {
  return (
    <pre className="text-red-400">
      {`const contact = {`}
      <br />
      {`  email: "your.email@example.com",`}
      <br />
      {`  phone: "+123 456 7890",`}
      <br />
      {`  location: "Your City, Country"`}
      <br />
      {`};`}
    </pre>
  );
};

export default Contact;
