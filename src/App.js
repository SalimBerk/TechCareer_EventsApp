import "./style/main.css";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./Pages/Contact";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { EventDetail } from "./Pages/EventDetail";
import { PastEvents } from "./Pages/PastEvents";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/PastEvents" element={<PastEvents></PastEvents>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Events/:id" element={<EventDetail></EventDetail>}></Route>
      </Routes>
    </>
  );
}

export default App;
