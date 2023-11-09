import React from 'react';
import './App.css';
import NavbarMain from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./Components/News";

function App() {
  return (
        <BrowserRouter>
    <div className="App">
      <NavbarMain/>

        <Routes>
            <Route path={'/News'} element={<News>}/>
        </Routes>
    </div>
        </BrowserRouter>
  );
}

export default App;
