import "./style/main.css";
import { Route, Routes } from "react-router-dom";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { EventDetail } from "./Pages/EventDetail";
import { PastEvents } from "./Pages/PastEvents";
import { useState } from "react";
import { GetDataContext } from "./context/GetDataContext";
import { EventsByCity } from "./Pages/EventsByCity";

function App() {
  const [event, setEvent] = useState([]);

  return (
    <>
      <GetDataContext.Provider value={{ event, setEvent }}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/PastEvents" element={<PastEvents></PastEvents>}></Route>

          <Route path="/About" element={<About></About>}></Route>
          <Route
            path="/Events/:id"
            element={<EventDetail></EventDetail>}
          ></Route>
          <Route
            path="/events/city?"
            element={<EventsByCity></EventsByCity>}
          ></Route>
        </Routes>
      </GetDataContext.Provider>
    </>
  );
}

export default App;
