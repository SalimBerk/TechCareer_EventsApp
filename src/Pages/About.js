import React from "react";

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
        Hakkımızda
      </h1>
      <div className="about-content">
        Biz 2023 yılında Türkiyedeki yapılacak etkinlikleri duyurmak için
        kurulduk. Bizi sosyal medya hesaplarımızdan takip edebilirsin.Senin
        desteğinle birlikte yeni etkinliklerden daha fazla insanın bilgi sahibi
        olmasını sağlayabilir ve arkadaşlarımızın daha fazla sosyalleşmesine
        katkıda bulunabiliriz.
      </div>
      <div className="profile">
        <a href="https://www.instagram.com/salimberk_uzun/?utm_source=qr&igshid=OGIxMTE0OTdkZA==">
          <img
            className="profile-image"
            src={Profile}
            style={{
              borderRadius: "120px",
              width: "200px",
              alignSelf: "center",
              marginTop: "4rem",
              border: "2px solid orange",
            }}
          ></img>
        </a>

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
