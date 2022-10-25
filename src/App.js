import React from "react";
import {Header, SideBar, Main} from "./Components"

const App = () => {
  return (
    <div className="Home">
      <Header />
      <div className="app">
      <SideBar />
      <Main/> 
      </div>
    </div>
  );
};

export default App;
