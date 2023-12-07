import React from "react";
import "./styles.css";
import makanan from "./img/makanan 3.svg";

const Home = () => {
  return (
    <div className="home" id="home">
      <h2>Home</h2>
      <div class="row">
        <div class="col-8">
          <h4>
            Dengan menu beragam dan pelayanan terbaik,<br></br>
            <br></br>
            Warung Pandawa menjadi pilihan utama untuk menikmati<br></br>
            <br></br>
            santap siang atau malam yang istimewa di Manokwari.
          </h4>
        </div>
        <div class="col-4">
          <img src={makanan}></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
