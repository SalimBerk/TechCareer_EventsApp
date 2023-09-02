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
import NavigationIcon from "@mui/icons-material/Navigation";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FestivalIcon from "@mui/icons-material/Festival";
import SocialDistanceIcon from "@mui/icons-material/SocialDistance";
import Avatar from "@mui/material/Avatar";

export const Home = () => {
  const [event, setEvent] = useState([]);
  const [value, setValue] = useState("");
  const [newEvents, setNewEvents] = useState([]);
  const [progress, setProgress] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
    const newdata = newEvents.filter((item) =>
      item.description.toLocaleLowerCase().includes(value.toLowerCase().trim())
    );
    setEvent(newdata);
  };
  const listConcerts = async () => {
    await axios.get("http://localhost:3000/concerts").then((res) => {
      setEvent(res.data);
      setNewEvents(res.data);
      setProgress(false);
    });
  };
  const listFestivals = async () => {
    await axios.get("http://localhost:3000/festivals").then((res) => {
      setEvent(res.data);
      setNewEvents(res.data);
      setProgress(false);
    });
  };
  const listTheaters = async () => {
    await axios.get("http://localhost:3000/theaters").then((res) => {
      setEvent(res.data);
      setNewEvents(res.data);
      setProgress(false);
    });
  };
  const listStandUps = async () => {
    await axios.get("http://localhost:3000/standups").then((res) => {
      setEvent(res.data);
      setNewEvents(res.data);
      setProgress(false);
    });
  };
  const getData = () =>
    axios.get("http://localhost:3000/events").then((res) => {
      setEvent(res.data);
      console.log(res.data);
      setNewEvents(res.data);
      setProgress(false);
    });
  useEffect(() => {
    getData();
  }, []);
  var items = [
    {
      id: 8,
      image:
        "https://wp.oggusto.com/wp-content/uploads/2023/08/emre-aydin-1.webp",
      artist: "Emre Aydın",
      city: "istanbul",
      location: "Mask Beach",
      date: "15/09/2023",
      time: "22:00",
      ticket: "Biletix",
      description:
        "Rock müziğin sevilen ismi Emre Aydın, 15 Eylül akşamı Mask Beach Beylikdüzü Sahnesi’nde.",
    },
    {
      id: 29,
      image:
        "https://wp.oggusto.com/wp-content/uploads/2023/08/tamino-1024x576-1.webp",
      artist: "Tamino",
      city: "izmir",
      location: "İzmir Arena",
      date: "14/09/2023",
      time: "19:00",
      ticket: "Passo",
      description: "",
    },
    {
      id: 55,
      image:
        "https://wp.oggusto.com/wp-content/uploads/2023/08/cem-adrian-1.webp",
      artist: "Cem Adrian",
      city: "Ankara",
      location: "MEB Şura Salonu",
      date: "17/09/2023",
      time: "20:00",
      ticket: "Biletix",
      description:
        "Müzikte sınırları, tarzları, kuralları dışlayan, kendini sadece “özgür bir müzisyen” olarak tanımlayan Cem Adrian, sevenleriyle buluşmaya devam ediyor.",
    },
    {
      id: 102,
      image:
        "https://wp.oggusto.com/wp-content/uploads/2023/08/Eat-Like-an-Italian-2-1024x576.webp",
      artist: "Eat Like an Italian 2",
      city: "istanbul",
      location: "The Ritz-Carlton",
      date: "16/09/2023",
      ticket: "Passo",
      description: "İtalyan Lezzetleri ve Müziği",
    },
    {
      id: 111,
      image:
        "https://wp.oggusto.com/wp-content/uploads/2023/08/izmir-rooftop-festival-1024x576.webp",
      artist: "İzmir Rooftop Festival",
      city: "izmir",
      location: "Çeşitli Teraslar",
      date: "30/09/2023",
      time: "15:00",
      ticket: "Passo",
      description: "Farklı birçok ismin performans sergileyeceği festival",
    },
    {
      id: 118,
      image:
        "https://wp.oggusto.com/wp-content/uploads/2023/08/mahser-i-cumbus.webp",
      artist: "Mahşer-i Cümbüş",
      city: "izmir",
      location: "Bostanlı Suat Taşer Tiyatrosu",
      date: "14/09/2023",
      time: "21:00",
      ticket: "Biletix",
      description:
        "Türkiye’de modern doğaçlama tiyatronun öncüsü olan Mahşer-i Cümbüş, tiyatroseverler ile buluşmaya devam ediyor.",
    },
    {
      id: 119,
      image:
        "https://wp.oggusto.com/wp-content/uploads/2023/08/dogu-demirkol-1-1024x576.webp",
      artist: "Doğu Demirkol",
      city: "izmir",
      location: "Bostanlı Suat Taşer Tiyatrosu",
      date: "19/09/2023",
      time: "21:00",
      ticket: "Passo",
      description:
        "Türkiye, Avrupa ve Amerika’da ve dünyanın farklı şehirlerinde gerçekleştirdiği tek kişilik gösterisinde kendi yaşamından ve bu topraklarda güldürü niteliği taşıyan her olaydan beslenen Doğu Demirkol, bu sezon da seyircisi ile buluşmaya devam ediyor.",
    },
    {
      id: 120,
      image:
        "https://wp.oggusto.com/wp-content/uploads/2023/08/anlatanadam-1.webp",
      artist: "Anlatanadam Stand Up",
      city: "izmir",
      location: "İzmir Performance Hall",
      date: "20/09/2023",
      time: "21:00",
      ticket: "Biletix",
      description:
        "Rabarba’nın vazgeçilmez konuklarından, Türkiye’nin en çok dinlenen mizah podcasti Meksika Açmazı’nın sevilen ismi Anlatanadam, 90 dakika ve iki perdelik stand up gösterisinde birbirinden komik hikayeler ve tespitlerle nasıl Norveçli olduğunu anlatıyor.",
    },
  ];

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
          <div className="row">
            <div className="col-md-2">
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <button onClick={listConcerts}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ backgroundColor: "orange" }}>
                        <InterpreterModeIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      <span
                        style={{
                          fontSize: "1.5rem",
                          textShadow: "1px 1px orange",
                          fontWeight: "bold",
                        }}
                      >
                        Concerts
                      </span>
                    </ListItemText>
                  </ListItem>
                </button>
                <Divider
                  sx={{ border: "2px solid orange" }}
                  variant="inset"
                  component="li"
                />
                <button onClick={listTheaters}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ backgroundColor: "orange" }}>
                        <TheaterComedyIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      <span
                        style={{
                          fontSize: "1.5rem",
                          textShadow: "1px 1px orange",
                          fontWeight: "bold",
                        }}
                      >
                        Theaters
                      </span>
                    </ListItemText>
                  </ListItem>
                </button>

                <Divider
                  sx={{ border: "2px solid orange" }}
                  variant="inset"
                  component="li"
                />
                <button onClick={listFestivals}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ backgroundColor: "orange" }}>
                        <FestivalIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      <span
                        style={{
                          fontSize: "1.5rem",
                          textShadow: "1px 1px orange",
                          fontWeight: "bold",
                        }}
                      >
                        Festivals
                      </span>
                    </ListItemText>
                  </ListItem>
                </button>

                <Divider
                  sx={{ border: "2px solid orange" }}
                  variant="inset"
                  component="li"
                />
                <button onClick={listStandUps}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ backgroundColor: "orange" }}>
                        <SocialDistanceIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      <span
                        style={{
                          fontSize: "1.5rem",
                          textShadow: "1px 1px orange",
                          fontWeight: "bold",
                        }}
                      >
                        StandUps
                      </span>
                    </ListItemText>
                  </ListItem>
                </button>
              </List>
            </div>
            <div className="col-md-10">
              <div className="container-fluid gap-2 mx-4 my-3">
                <div className="row mx-4">
                  {event.map((item, index) => {
                    return <Card item={item} key={index}></Card>;
                  })}
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
          </div>
        </>
      )}
    </>
  );
};
function Item(props) {
  return (
    <div className="carousel-scope">
      <a href={`/Events/${props.item.id}`}>
        <div
          className="carousel"
          style={{
            backgroundImage: `url(${props.item.image})`,
          }}
        ></div>
      </a>
      <div>
        <Typography
          className="carousel-title"
          variant="h4"
          sx={{ color: "white" }}
        >
          {props.item.artist}
        </Typography>
      </div>
    </div>
  );
}
