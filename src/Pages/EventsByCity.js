import React, { useContext, useEffect, useState } from "react";
import { GetDataContext } from "../context/GetDataContext";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Card } from "../Components/Card";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import NavigationIcon from "@mui/icons-material/Navigation";

export const EventsByCity = () => {
  const { event, setEvent } = useContext(GetDataContext);
  const [progress, setProgress] = useState(true);
  const location = useLocation();
  var newLocationSearch = location.search.replace("?city=", "");
  const listByCity = async () => {
    await axios
      .get("https://eventsapp-backend-284c585dbd16.herokuapp.com/events")
      .then((res) => {
        setEvent(res.data.filter((item) => item.city == newLocationSearch));
        setProgress(false);
      });
  };
  useEffect(() => {
    listByCity();
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
            Şehre Göre Etkinlikler Yükleniyor ...
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 ">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "20%",
                  textAlign: "center",
                }}
                className="row"
              >
                <Typography
                  variant="h4"
                  sx={{
                    border: "2px solid orange",
                    borderRadius: "50px",
                    width: "70%",
                    padding: "2rem",
                    marginBottom: "10%",
                    textShadow: "1px 1px orange",
                    fontWeight: "bold",
                  }}
                >
                  Aşağıda Tıkladığın Şehre Göre Etkinlikleri Görebilirsin.
                </Typography>

                <LocationCityIcon
                  sx={{
                    width: "500px",
                    height: "500px",
                    color: "orange",
                    marginBottom: "10%",
                  }}
                ></LocationCityIcon>
              </div>
            </div>
            <div className="col-md-12 mx-2 ">
              <div className="row">
                {event.map((item) => {
                  return <Card key={item.id} item={item}></Card>;
                })}
              </div>
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
