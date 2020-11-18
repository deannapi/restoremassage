import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Appointments from "./components/appointments";
import Home from "./components/home";

export default function App() {
  const [ContactSelected, setContactSelected] = useState(false);
  const [HomeSelected, setHomeSelected] = useState(false);
  const [AppointmentsSelected, setAppointmentsSelected] = useState(false);

  return (
    <div>
      <Header
        ContactSelected={ContactSelected}
        setContactSelected={setContactSelected}
        AppointmentsSelected={AppointmentsSelected}
        setAppointmentsSelected={setAppointmentsSelected}
        HomeSelected={HomeSelected}
        setHomeSelected={setHomeSelected}
      ></Header>

      <main>
        <div>
          {!HomeSelected ? <></> : <Home></Home>}
          {!ContactSelected ? <></> : <Contact></Contact>}
          {!AppointmentsSelected ? <></> : <Appointments></Appointments>}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
