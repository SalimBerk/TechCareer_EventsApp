import React, { useContext, useEffect, useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Card } from "../Components/Card";
import CircularProgress from "@mui/material/CircularProgress";
import NavigationIcon from "@mui/icons-material/Navigation";
import Typography from "@mui/material/Typography";
import { GetDataContext } from "../context/GetDataContext";
import ErrorIcon from "@mui/icons-material/Error";

export const PastEvents = () => {
  const { event, setEvent } = useContext(GetDataContext);

  const [progress, setProgress] = useState(true);

  var today = new Date();

  const getPastEvents = async () =>
    await axios
      .get("https://eventsapp-backend-284c585dbd16.herokuapp.com/events")
      .then((res) => {
        setEvent(
          res.data.filter((item) => {
            var date = new Date(item.date);
            return date < today;
          })
        );

        setProgress(false);
      });

  useEffect(() => {
    getPastEvents();
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
          <div className="loading-content mt-5">Loading Past Events ...</div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <span></span>
            <div className="col-md-12 past-events">
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
                Past Events
              </h1>
              {event.length < 0 ? (
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
                  <Typography
                    sx={{
                      fontWeight: "300",
                      textAlign: "center",
                      color: "orange",
                      textShadow: "2px 2px black",
                    }}
                    variant="h3"
                  >
                    Event Not Found
                  </Typography>
                  <ErrorIcon
                    sx={{
                      fontSize: "300px",
                      marginTop: "2rem",
                      color: "orange",
                      border: "2px dashed black",
                      borderRadius: "160px",
                    }}
                  ></ErrorIcon>
                </div>
              ) : (
                <div className="row mx-2 past-cards">
                  {event.map((item, index) => {
                    return <Card item={item} key={index}></Card>;
                  })}
                </div>
              )}
            </div>
          </div>
          <a href="#" className="gotoup">
            <NavigationIcon
              sx={{ fontSize: "80px" }}
              className="gotoup-icon"
            ></NavigationIcon>
            <p
              style={{
                textAlign: "center",
                right: "50px",
                position: "fixed",
                fontWeight: "bold",
              }}
            >
              UP
            </p>
          </a>
        </div>
      )}
    </>
  );
};
