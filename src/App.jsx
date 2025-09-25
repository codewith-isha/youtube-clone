// import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex mt-20">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default App;
