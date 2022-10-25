import React from "react";
import {Header, SideBar, Main, Watching} from "./Components"
import {
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div className="Home">
    <Header />
    <Routes>
      <Route path="/" element={
          <div className="app">
          <SideBar />
          <Main/> 
          </div>
      } />
      <Route path="/watch" element={<Watching />} />
    </Routes>
        </div>
  );
};

export default App;
