import React from "react";
import Typography from "@mui/material/Typography";
import Profile from "../img/profil.jpg";

import InstagramIcon from "@mui/icons-material/Instagram";

export const About = () => {
  return (
    <div className="container mt-5 about">
      <Typography
        variant="h2"
        sx={{ color: "black", textAlign: "center", fontWeight: "bold" }}
      >
        About Us
      </Typography>
      <div className="about-content">
        We were founded in 2023 about sharing new events in the Turkey. You
        follow us on our Social Media and we can reach new communities. We want
        to reach new aims with your supports
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
