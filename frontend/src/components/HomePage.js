import React, {useState} from 'react';
import JoinRoomPage from "./JoinRoomPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";

import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from "react-router-dom";

const HomePage = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<p>This is the home page</p>} />
        <Route path="/join" element={<JoinRoomPage />} />
        <Route path="/create" element={<CreateRoomPage />} />
        <Route path="/room/:roomCode" element={<Room />} />
      </Routes>
    </Router> 
  );
}

export default HomePage;
