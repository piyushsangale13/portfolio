import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import Home from "./tabs/Home";
import Projects from "./tabs/Projects";
import About from "./tabs/About";
import Resume from "./tabs/Resume";
import Contact from "./tabs/Contact";

const tabs = {
  home: { name: "home.js", component: <Home /> },
  projects: { name: "projects.js", component: <Projects /> },
  about: { name: "about.js", component: <About /> },
  resume: { name: "resume.js", component: <Resume /> },
  contact: { name: "contact.js", component: <Contact /> },
};

const Editor = ({ activeTab, openTabs, setOpenTabs, setActiveTab, collapsed, setCollapsed }) => {
  const closeTab = (id) => {
    const newTabs = openTabs.filter((tab) => tab !== id);
    setOpenTabs(newTabs);
    if (id === activeTab && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1]);
    } else if (newTabs.length === 0) {
      setActiveTab(null);
    }
  };

  return (
    <div className={`${collapsed ? "ml-16" : "ml-48"} transition-all duration-300 flex-1 flex flex-col bg-[#1E1E1E]`}>
      {/* Tabs Bar */}
      <div className="flex bg-[#252526] border-b border-gray-700 text-sm text-gray-400">
        {openTabs.map((id) => (
          <div
            key={id}
            className={`flex items-center px-4 py-2 border-r border-gray-700 cursor-pointer ${
              id === activeTab ? "bg-[#1E1E1E] text-white border-b-2 border-blue-500" : "hover:bg-[#333333]"
            }`}
            onClick={() => setActiveTab(id)}
          >
            {tabs[id].name}
            <Close
              className="ml-2 text-gray-500 hover:text-red-500 text-sm cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                closeTab(id);
              }}
            />
          </div>
        ))}
      </div>

      {/* Content Area */}
      <div className="p-4 text-gray-300 h-full">
        {activeTab ? tabs[activeTab].component : <p className="text-gray-500">// Open a file</p>}
      </div>
    </div>
  );
};

export default Editor;
