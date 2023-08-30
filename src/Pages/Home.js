import React from "react";

import Carousel from "react-material-ui-carousel";
import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "../Components/Card";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

export const Home = () => {
  const [event, setEvent] = useState([]);
  const [value, setValue] = useState("");
  const [newEvents, setNewEvents] = useState([]);
  const [progress, setProgress] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
    const newdata = newEvents.filter((item) =>
      item.Title.toLocaleLowerCase().includes(value.toLowerCase().trim())
    );
    setEvent(newdata);
  };
  const getData = () =>
    axios
      .get(
        "https://api.ibb.gov.tr/MetroIstanbul/api/MetroMobile/V2/GetActivities"
      )
      .then((res) => {
        setEvent(res.data.Data);
        setNewEvents(res.data.Data);
        setProgress(false);
      });
  useEffect(() => {
    getData();
  }, []);
  var items = [];

  const popularEvents = newEvents.filter(
    (item) => item.Id == 55 || item.Id == 29 || item.Id == 27
  );
  popularEvents.forEach((item) => items.push(item));

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
          <div>
            <div className="loading-content mt-5">Loading Events ...</div>
          </div>
        </div>
      ) : (
        <>
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
            Popular Events
          </h1>
          <Carousel
            indicatorIconButtonProps={{
              style: {
                marginTop: "1rem",
                padding: "10px", // 1
                color: "orange", // 3
              },
            }}
            navButtonsProps={{
              style: {
                backgroundColor: "orange",
                borderRadius: 50,
              },
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
              margin: "auto",
              padding: "0.1rem",
            }}
          >
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
          <div className="FilterData">
            {/* <input type="text" id="message" value={value} onChange={handleChange} /> */}
            <Box sx={{ display: "flex" }}>
              <ManageSearchIcon
                sx={{
                  color: "action.active",
                  mr: 2,
                  my: 0,
                  fontSize: "55px",
                }}
              ></ManageSearchIcon>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Filtered Events"
                variant="outlined"
                value={value}
                onChange={handleChange}
              />
            </Box>
          </div>
          <div className="container-fluid gap-2 mx-4 my-3">
            <div className="row mx-4">
              {event.map((item, index) => {
                return <Card item={item} key={index}></Card>;
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};
function Item(props) {
  return (
    <div className="carousel-scope">
      <a href={`/Events/${props.item.Id}`}>
        <div
          className="carousel"
          style={{
            backgroundImage: `url(${props.item.Photo})`,
          }}
        ></div>
      </a>
      <div>
        <Typography
          className="carousel-title"
          variant="h4"
          sx={{ color: "white" }}
        >
          {props.item.Title}
        </Typography>
      </div>
    </div>
  );
}
