import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import MoviePage from "./MoviePage";
import HeaderMain from "./Header";
import Contact from "./Contact";
import Login from "./Login";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn} setisLoggedIn={setIsLoggedIn} />
            <HeaderMain />
            <Routes>
                <Route path="/" element={<MoviePage isLoggedIn={isLoggedIn}/>} />
                <Route path="/.Contact" element={<Contact />} />
                {/* <Route path="/.Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> */}
            </Routes>
        </div>
    );
}
export default App;