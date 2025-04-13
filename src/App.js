import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";

const App = () => {
  const [openTabs, setOpenTabs] = useState(["home"]);
  const [activeTab, setActiveTab] = useState("home");
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-screen overflow-y-auto flex bg-[#1E1E1E] text-gray-300">
      <Sidebar setActiveTab={setActiveTab} openTabs={openTabs} setOpenTabs={setOpenTabs} collapsed={collapsed} setCollapsed={setCollapsed} />
      <Editor activeTab={activeTab} openTabs={openTabs} setOpenTabs={setOpenTabs} setActiveTab={setActiveTab} collapsed={collapsed} setCollapsed={setCollapsed} />
    </div>
  );
};

export default App;
