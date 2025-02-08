import React, { useState } from "react";
import { Menu, Folder, Code, Person, Work, ContactMail } from "@mui/icons-material";

const Sidebar = ({ setActiveTab, openTabs, setOpenTabs }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleOpenTab = (tab) => {
    if (!openTabs.includes(tab)) {
      setOpenTabs([...openTabs, tab]);
    }
    setActiveTab(tab);
  };

  return (
    <div className={`transition-all duration-300 ${collapsed ? "w-16" : "w-48"} bg-[#252526] flex flex-col py-4 border-r border-gray-700`}>
      {/* Toggle Button */}
      <div className="flex items-center justify-between px-4">
        <span className={`${collapsed ? "hidden" : "text-white font-semibold"}`}>Explorer</span>
        <Menu className="text-gray-400 cursor-pointer hover:text-white" onClick={() => setCollapsed(!collapsed)} />
      </div>

      {/* Sidebar Items */}
      <div className="flex flex-col items-start mt-4">
        <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#333333] w-full" onClick={() => handleOpenTab("home")}>
          <Code className="text-blue-400 text-2xl" />
          {!collapsed && <span className="ml-3 text-gray-300">Home</span>}
        </div>
        <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#333333] w-full" onClick={() => handleOpenTab("projects")}>
          <Folder className="text-gray-400 text-2xl" />
          {!collapsed && <span className="ml-3 text-gray-300">Projects</span>}
        </div>
        <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#333333] w-full" onClick={() => handleOpenTab("about")}>
          <Person className="text-gray-400 text-2xl" />
          {!collapsed && <span className="ml-3 text-gray-300">About Me</span>}
        </div>
        <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#333333] w-full" onClick={() => handleOpenTab("resume")}>
          <Work className="text-gray-400 text-2xl" />
          {!collapsed && <span className="ml-3 text-gray-300">Resume</span>}
        </div>
        <div className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#333333] w-full" onClick={() => handleOpenTab("contact")}>
          <ContactMail className="text-gray-400 text-2xl" />
          {!collapsed && <span className="ml-3 text-gray-300">Contact</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
