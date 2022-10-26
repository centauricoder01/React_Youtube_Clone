import React from "react";
import {Header, SideBar, Main, Watching, Login, SignUp} from "./Components"
import {
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
        <Routes>
          <Route path="/" element={
            <div className="Home">
              <Header />
              <div className="app">
              <SideBar />
              <Main/> 
              </div>
              </div>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/watch" element={
              <div className="Home">
              <Header />
              <div className="app">
              <Watching />
              </div>
              </div>
          } />
        </Routes>
  );
};

export default App;
