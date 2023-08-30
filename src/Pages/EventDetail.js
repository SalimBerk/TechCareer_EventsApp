import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShareIcon from "@mui/icons-material/Share";
export const EventDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [progress, setProgress] = useState(true);
  const getDetailById = () => {
    axios
      .get(
        "https://api.ibb.gov.tr/MetroIstanbul/api/MetroMobile/V2/GetActivities"
      )
      .then((res) => {
        setDetail(res.data.Data.find((item) => item.Id == id));
        setProgress(false);
      });
  };
  useEffect(() => {
    getDetailById();
  }, []);
  return (
    <>
      {progress ? (
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "75vh",
            flexDirection: "column",
          }}
        >
          <CircularProgress
            sx={{ color: "orange" }}
            size={"7rem"}
          ></CircularProgress>
          <div className="loading-content mt-5">Loading Details ...</div>
        </div>
      ) : (
        <div className="container detail-card">
          <img className="detail-image" src={detail.Photo}></img>
          <Typography sx={{ fontWeight: "700" }} variant="h4">
            {detail.Title}
          </Typography>
          <p className="detail-content">
            {String(detail.Content)
              .replace(/<[^>]+>/g, "")
              .replace(/[@!^&\/\\#,+()$~%.'":*?<>{}]/g, "")}
          </p>
          <Typography
            sx={{ fontWeight: "700", textAlign: "center" }}
            variant="h5"
          >
            If you want,you can share events <ShareIcon></ShareIcon>
          </Typography>
          <div className="social-media">
            <a href="https://tr-tr.facebook.com/" className="social-media-icon">
              <FacebookIcon fontSize="large"></FacebookIcon>
            </a>
            <a href="https://www.instagram.com/" className="social-media-icon">
              <InstagramIcon fontSize="large"></InstagramIcon>
            </a>
            <a
              href="https://twitter.com/?lang=tr"
              className="social-media-icon"
            >
              <TwitterIcon fontSize="large"></TwitterIcon>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
