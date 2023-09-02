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
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

export const EventDetail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [progress, setProgress] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    border: "2px solid orange",
    borderRadius: "50px",
  };

  const getDetailById = () => {
    axios.get("http://localhost:3000/events").then((res) => {
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
          <div className="loading-content mt-5">Loading Details ...</div>
        </div>
      ) : (
        <div className="container detail-card">
          <img className="detail-image" src={detail.image}></img>

          <Button
            sx={{
              width: "250px",
              alignSelf: "center",
              border: "2px solid orange",
              borderRadius: "50px",
              color: "black",
            }}
            onClick={handleOpen}
          >
            About Ticket{" "}
            <ConfirmationNumberIcon
              sx={{ marginLeft: "20px", color: "orange" }}
            ></ConfirmationNumberIcon>
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <p>Starting Time</p>({detail.time} - {detail.date})
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                You can buy ticket from
                <strong style={{ fontSize: "20px" }}>"{detail.ticket}"</strong>
              </Typography>
            </Box>
          </Modal>

          <Typography sx={{ fontWeight: "700" }} variant="h4">
            {detail.artist ? detail.artist : detail.title}
          </Typography>
          <p className="detail-content">
            {String(detail.description).replace(/<[^>]+>/g, "")}
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
                  height: "500px",
                  border: "3px solid orange",
                  display: "flex",
                  alignSelf: "center",
                  borderRadius: "20px",
                }}
              >
                <iframe
                  src={detail.maplink}
                  width="700"
                  height="500"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
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
              Location Not Found
            </Typography>
          )}

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
