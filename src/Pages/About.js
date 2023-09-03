import React from "react";
import Typography from "@mui/material/Typography";
import Profile from "../img/profil.jpg";

import InstagramIcon from "@mui/icons-material/Instagram";

export const About = () => {
  return (
    <div className="container mt-5 about">
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "40px",
          marginTop: "2rem",
          marginBottom: "1rem",
          textShadow: "2px 2px orange",
        }}
      >
        About Us
      </h1>
      <div className="about-content">
        We were founded in 2023 about sharing new events in the Turkey. You
        follow me on our Social Media and we can reach new communities.Together
        we want to reach new aims with your supports.
      </div>
      <div style={{ display: "flex", alignSelf: "center" }}>
        <img
          src={Profile}
          style={{
            borderRadius: "120px",
            width: "200px",
            alignSelf: "center",
            marginTop: "4rem",
            border: "2px solid orange",
          }}
        ></img>
        <a href="https://www.instagram.com/salimberk_uzun/?utm_source=qr&igshid=OGIxMTE0OTdkZA==">
          <InstagramIcon
            sx={{
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3rem",
              marginTop: "4rem",
              width: "100px",
              color: "orange",
            }}
          ></InstagramIcon>
        </a>
      </div>
    </div>
  );
};
