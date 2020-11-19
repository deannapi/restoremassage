import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Appointments from "./components/appointments";
import Home from "./components/home";
import Menu from "./components/menu";
import Blog from "./components/blog";
import Products from "./components/products";

export default function App() {
  const [ContactSelected, setContactSelected] = useState(false);
  const [HomeSelected, setHomeSelected] = useState(false);
  const [AppointmentsSelected, setAppointmentsSelected] = useState(false);
  const [GiftSelected, setGiftSelected] = useState(false);
  const [MenuSelected, setMenuSelected] = useState(false);
  const [BlogSelected, setBlogSelected] = useState(false);
  const [ProductsSelected, setProductsSelected] = useState(false);

  return (
    <div>
      <Header
        ContactSelected={ContactSelected}
        setContactSelected={setContactSelected}
        AppointmentsSelected={AppointmentsSelected}
        setAppointmentsSelected={setAppointmentsSelected}
        HomeSelected={HomeSelected}
        setHomeSelected={setHomeSelected}
        GiftSelected={GiftSelected}
        setGiftSelected={setGiftSelected}
        MenuSelected={MenuSelected}
        setMenuSelected={setMenuSelected}
        BlogSelected={BlogSelected}
        setBlogSelected={setBlogSelected}
        ProductsSelected={ProductsSelected}
        setProductsSelected={setProductsSelected}
      ></Header>

      <main>
        <div>
          {!HomeSelected ? <></> : <Home></Home>}
          {!ContactSelected ? <></> : <Contact></Contact>}
          {!AppointmentsSelected ? <></> : <Appointments></Appointments>}
          {!MenuSelected ? <></> : <Menu></Menu>}
          {!BlogSelected ? <></> : <Blog></Blog>}
          {!ProductsSelected ? <></> : <Products></Products>}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
