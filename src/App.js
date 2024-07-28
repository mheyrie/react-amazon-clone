import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home"
import Checkout from "./component/Checkout"
import Header from "./component/Header";
import Login from "./pages/Login";



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
