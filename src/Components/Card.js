import React from "react";
import nopicture from "../img/nopicture.jpg";
export const Card = ({ item }) => {
  return (
    <div className="col-md-4 ">
      <div className="card gap-3">
        <a href={`/Events/${item.Id}`}>
          <img
            className="card-img-top"
            src={item.Photo ? item.Photo : nopicture}
          ></img>
        </a>
        <div className="card-body">
          <h2
            className="card-title"
            style={{ fontWeight: "bold", fontSize: "22px" }}
          >
            {item.Title}
          </h2>
          <p className="card-text">
            {item.Content.substring(0, 150)
              .replace(/<[^>]+>/g, "")
              .replace(/[@!^&\/\\#,+()$~%.'":*?<>{}]/g, "")}
            ...
          </p>
        </div>
      </div>
    </div>
  );
};
