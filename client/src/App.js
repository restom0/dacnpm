import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Coursepage from "./pages/Coursepage";
import Contactpage from "./pages/Contactpage";
import Mypage from "./pages/Mypage";
import Mycoursepage from "./pages/Mycoursepage";
import Loginfilterpage from "./pages/Loginfilterpage";
import Staffhomepage from "./pages/Staffhomepage";
import Staffinfopage from "./pages/Staffinfostupage";
import Attendpage from "./pages/Attendpage";
import Markpage from "./pages/Markpage";
import Cashinpage from "./pages/Cashinpage";
import Ratingpage from "./pages/Ratingpage";
import Filepage from "./pages/Filepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Coursepage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/mycourse" element={<Mycoursepage />} />
        <Route path="/loginfilter" element={<Loginfilterpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/staffhome" element={<Staffhomepage />} />
        <Route path="/staffinfo" element={<Staffinfopage />} />
        <Route path="/attend" element={<Attendpage />} />
        <Route path="/mark" element={<Markpage />} />
        <Route path="/cashin" element={<Cashinpage />} />
        <Route path="/rate" element={<Ratingpage />} />
        <Route path="/file" element={<Filepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
