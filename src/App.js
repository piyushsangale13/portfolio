import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";

const App = () => {
  const [openTabs, setOpenTabs] = useState(["home"]);
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="h-screen flex bg-[#1E1E1E] text-gray-300">
      <Sidebar setActiveTab={setActiveTab} openTabs={openTabs} setOpenTabs={setOpenTabs} />
      <Editor activeTab={activeTab} openTabs={openTabs} setOpenTabs={setOpenTabs} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
