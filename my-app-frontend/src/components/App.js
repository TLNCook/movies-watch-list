import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import MoviePage from "./MoviePage";
import Contact from "./Contact";
import Login from "./Login";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn} setisLoggedIn={setIsLoggedIn} />
            <Routes>
                <Route path="/" element={<MoviePage isLoggedIn={isLoggedIn}/>} />
                <Route path="/.Contact" element={<Contact />} />
                {/* <Route path="/.Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> */}
            </Routes>
        </div>
    );
}
export default App;