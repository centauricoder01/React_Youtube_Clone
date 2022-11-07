import React from "react";
import {Header, Main, Watching, Login, SignUp} from "./Components"
import {
  Routes,
  Route,
} from "react-router-dom";
import PrivateRoutes from "./Authentication/PrivateRoutes";
import "./index.css"
import SearchVideo from "./Components/Searched_Video/Search_Video";
const App = () => {
  return (
        <Routes>
          <Route path="/" element={
            <div className="Home">
              <Header />
              <div className="app">
              <Main/> 
              </div>
              </div>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/searchvideo" element={<SearchVideo />}/>
          <Route path="/watch" element={
            <PrivateRoutes>
              <div className="Home">
              <Header />
              <div className="app">
              <Watching />
              </div>
              </div>
             </PrivateRoutes>
          } />
        </Routes>
  );
};

export default App;
