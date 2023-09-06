import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

export const EventDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [progress, setProgress] = useState(true);

  const getDetailById = async () => {
    await axios
      .get("https://eventsapp-backend-284c585dbd16.herokuapp.com/events")
      .then((res) => {
        setDetail(res.data.find((item) => item.id == id));
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
          <div className="loading-content mt-5">
            Etkinlik Detayları Yükleniyor ...
          </div>
        </div>
      ) : (
        <div className="container detail-card">
          <img className="detail-image" src={detail.image}></img>
          <Accordion
            sx={{
              width: "60%",
              alignSelf: "center",
              border: "1px solid black",
              borderRadius: "20px",
            }}
          >
            <AccordionSummary
              sx={{ color: "black" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  fontWeight: "bolder",
                  textShadow: "1px 1px orange",
                  fontSize: "25px",
                }}
              >
                Etkinlik Detayları
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: "15px" }} paragraph={true}>
                Bu etkinliğe katılmak için biletini
                <span style={{ fontWeight: "bolder" }}>"{detail.ticket}"</span>
                den alabilirsin.
              </Typography>
              <Typography variant="body2" paragraph={true}>
                Etkinlik Başlama Tarihi:{" "}
                <span style={{ fontWeight: "bolder" }}>{detail.date}</span>
              </Typography>
              <Typography variant="body2" paragraph={true}>
                Etkinlik Başlama Saati:{" "}
                <span style={{ fontWeight: "bolder" }}>{detail.time}</span>
              </Typography>
              <Typography variant="body2" paragraph={true}>
                Etkinlik Şehri:{" "}
                <span style={{ fontWeight: "bolder" }}>
                  <Link to={`/events/?city=${detail.city}`}>{detail.city}</Link>
                </span>
                <ArrowBackIcon sx={{ marginLeft: "1rem" }}></ArrowBackIcon>
                <span
                  style={{
                    marginLeft: "1rem",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                >
                  Burada Şehir İsmine Tıklayarak Bu Şehirdeki Diğer Etkinlikleri
                  Görebilirsin.
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Typography sx={{ fontWeight: "700" }} variant="h4">
            {detail.artist ? detail.artist : detail.title}
          </Typography>
          <p className="detail-content">
            {detail.description.length > 0 ? (
              String(detail.description).replace(/<[^>]+>/g, "")
            ) : (
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <p>Etkinlik Açıklaması Bulunamadı.</p>
              </Typography>
            )}
          </p>

          <Typography
            sx={{ fontWeight: "300", textAlign: "center" }}
            variant="h4"
          >
            {detail.location} -
            <LocationOnIcon
              sx={{ color: "orange", fontSize: "50px" }}
            ></LocationOnIcon>
          </Typography>

          {detail.maplink != null ? (
            <>
              <Box
                component="div"
                sx={{
                  width: "700px",
                  height: "450px",
                  border: "5px solid orange",
                  display: "flex",
                  alignSelf: "center",
                  borderRadius: "20px",
                }}
              >
                <iframe
                  src={detail.maplink}
                  style={{ borderRadius: "20px" }}
                  width="700px"
                  height="441px"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </>
          ) : (
            <Typography
              sx={{
                fontWeight: "300",
                textAlign: "center",
                color: "orange",
                textShadow: "2px 2px black",
              }}
              variant="h3"
            >
              Konum Bilgisi Bulunamadı.
            </Typography>
          )}

          <Typography
            sx={{ fontWeight: "700", textAlign: "center" }}
            variant="h5"
          >
            Eğer istersen bu etkinliği sosyal medya hesabından paylaşabilirsin.{" "}
            <ShareIcon></ShareIcon>
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
