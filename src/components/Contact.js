import React from "react";
import "./styles.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <p>
        Ingin melakukan reservasi? Ingin memberikan kritik dan saran?<br></br>{" "}
        Hubungi kami : <a href="wa.me/+6285354139932">(+62)853-5413-9932 (WA)</a>
      </p>
      <br></br>
      <h2>Location</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3966125599454!2d134.06363790000003!3d-0.8330493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d540b5d86657c3d%3A0xf037777e35ac718b!2sRM%20pandawa!5e0!3m2!1sen!2sid!4v1701926281321!5m2!1sen!2sid"
        width="100%"
        height="300"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <br></br>
    </section>
  );
};

export default Contact;
