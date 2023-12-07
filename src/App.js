import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
