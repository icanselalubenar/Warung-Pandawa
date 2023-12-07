import React from "react";
import "./styles.css";

const Header = () => {
  function scrollHome() {
    var konten = document.getElementById("home");
    konten.scrollIntoView();
  }
  function scrollMenu() {
    var konten = document.getElementById("features");
    konten.scrollIntoView();
  }
  function scrollContact() {
    var konten = document.getElementById("contact");
    konten.scrollIntoView();
  }
  return (
    <nav class="navbar navbar-expand-lg bg-primary">
      <div class="container-fluid">
        <h4>Warung Pandawa</h4>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" onClick={scrollHome}>
              Home
            </a>
            <a class="nav-link" onClick={scrollMenu}>
              Menu
            </a>
            <a class="nav-link" onClick={scrollContact}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
