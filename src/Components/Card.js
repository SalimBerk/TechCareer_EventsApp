import React from "react";
import nopicture from "../img/nopicture.jpg";
export const Card = ({ item }) => {
  return (
    <div className="col-md-4 ">
      <div className="card gap-3">
        <a href={`/events/${item.id}`}>
          <img
            style={{
              borderTopLeftRadius: "50px",
              borderTopRightRadius: "50px",
            }}
            className="card-img-top h-100"
            src={item.image ? item.image : nopicture}
          ></img>
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
