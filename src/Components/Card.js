import React from "react";
import nopicture from "../img/nopicture.jpg";
import { useLocation } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
export const Card = ({ item }) => {
  const location = useLocation();
  let display = "";
  if (location.pathname !== "/PastEvents") {
    display = "none";
  } else {
    display = "inline";
  }
  return (
    <div className="col-md-4 ">
      <div className="card gap-3">
        <a href={`/events/${item.id}`}>
          <img
            style={{
              borderTopLeftRadius: "50px",
              borderTopRightRadius: "50px",
              position: "relative",
            }}
            className="card-img-top "
            src={item.image ? item.image : nopicture}
          ></img>
          <div
            style={{
              display: `${display}`,
              position: "absolute",
              top: "23px",
              left: "26px",
            }}
          >
            <div
              style={{
                width: "9rem",
                backgroundColor: "orange",
                padding: "5px",
                textAlign: "center",
                borderRadius: "50px",
              }}
            >
              <p style={{ fontWeight: "bold", color: "white" }}>
                Time Over{" "}
                <AccessTimeIcon sx={{ marginLeft: "0.4rem" }}></AccessTimeIcon>
              </p>
            </div>
          </div>
        </a>
        <div className="card-body">
          <h2
            className="card-title"
            style={{ fontWeight: "bold", fontSize: "22px" }}
          >
            {item.artist ? item.artist : item.title}
          </h2>
          <p className="card-text">
            {item.description.substring(0, 100)}
            ...
          </p>
        </div>
      </div>
    </div>
  );
};
