import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Card } from "../Components/Card";
import CircularProgress from "@mui/material/CircularProgress";

export const PastEvents = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [pastEvents, setPastEvents] = useState([]);
  const [newSearchEvents, setSearchEvents] = useState([]);
  const [progress, setProgress] = useState(true);

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const getPastEvents = () =>
    axios
      .get(
        "https://api.ibb.gov.tr/MetroIstanbul/api/MetroMobile/V2/GetActivities"
      )
      .then((res) => {
        setPastEvents(
          res.data.Data.filter(
            (item) =>
              new Date(item.StartDate).getFullYear() &&
              new Date(item.StartDate).getMonth() &&
              new Date(item.StartDate).getDate() < today.getFullYear() &&
              today.getMonth() &&
              today.getDate()
          )
        );
        setSearchEvents(
          res.data.Data.filter(
            (item) =>
              new Date(item.StartDate).getFullYear() &&
              new Date(item.StartDate).getMonth() &&
              new Date(item.StartDate).getDate() < today.getFullYear() &&
              today.getMonth() &&
              today.getDate()
          )
        );
        setProgress(false);
      });

  useEffect(() => {
    getPastEvents();
  }, [date]);

  console.log(pastEvents);
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
            <div className="col-md-2 mt-5 text-center ">
              <h3
                style={{
                  marginBottom: "1rem",
                  textShadow: "1px 1px orange",
                  fontWeight: "bold",
                }}
              >
                List Events By Date
              </h3>
              <p
                style={{
                  marginBottom: "1rem",
                  textShadow: "1px 1px orange",
                  fontWeight: "bold",
                  border: "1px solid orange",
                  borderRadius: "40px",
                }}
              >
                Please enter a value as start
              </p>
              <DatePicker
                className="datepicker"
                selected={startDate}
                minDate={new Date("01-01-2022")}
                maxDate={new Date("08-20-2023")}
                onChange={(date) => {
                  setStartDate(date);
                  setPastEvents(
                    newSearchEvents.filter(
                      (item) => new Date(item.StartDate) >= date
                    )
                  );
                }}
              />
            </div>
            <div className="col-md-10">
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
              <div className="row mx-2 past-cards">
                {pastEvents.map((item, index) => {
                  return <Card item={item} key={index}></Card>;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
