import React from "react";
import "./styles.css";
import makanan1 from "./img/makanan 1.svg";
import makanan2 from "./img/makanan 2.svg";
import makanan3 from "./img/makanan 5.svg";
import makanan4 from "./img/makanan 4.svg";
import minuman1 from "./img/minuman 1.svg";
import minuman2 from "./img/minuman 2.svg";

const Features = () => {
  return (
    <section className="features" id="features">
      <h2>Daftar Menu</h2>
      <div class="row">
        <div class="card">
          <img src={makanan1} class="card-img-top"></img>
          <div class="card-body">
            <h5 class="card-title">Nasi Ayam Geprek</h5>
            <p class="card-text">Rp.18.000,</p>
          </div>
        </div>
        <div class="card">
          <img src={makanan2} class="card-img-top"></img>
          <div class="card-body">
            <h5 class="card-title">Nasi Ayam Kecap</h5>
            <p class="card-text">Rp.18.000,</p>
          </div>
        </div>
        <div class="card">
          <img src={makanan3} class="card-img-top"></img>
          <div class="card-body">
            <h5 class="card-title">Nasi Ikan Saos</h5>
            <p class="card-text">Rp.15.000,</p>
          </div>
        </div>
        <div class="card">
          <img src={makanan4} class="card-img-top"></img>
          <div class="card-body">
            <h5 class="card-title">Nasi Sayur Telur</h5>
            <p class="card-text">Rp.15.000,</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="card">
          <img src={minuman1} class="card-img-top"></img>
          <div class="card-body">
            <h5 class="card-title">Es Teh Manis</h5>
            <p class="card-text">Rp.7.000,</p>
          </div>
        </div>
        <div class="card">
          <img src={minuman2} class="card-img-top"></img>
          <div class="card-body">
            <h5 class="card-title">Es Jeruk Manis</h5>
            <p class="card-text">Rp.7.000,</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
