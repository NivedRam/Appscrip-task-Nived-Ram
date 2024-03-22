import React, { useEffect } from "react";
import Navbar from "./Section/Navbar";
import List from "./Section/List";
import Hero from "./Section/Hero";
import { getProduct } from "./Redux/Slices/Product";
import { dispatch } from "./Redux/store";
import TemporaryDrawer from "./components/Drawer";
import { Helmet } from "react-helmet";
import Footer from "./Section/Footer";

function Home() {
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>E-Kart</title>
        <meta
          name="description"
          content="\One stop sollution for all your needs"
        />
      </Helmet>
      <Navbar />
      <TemporaryDrawer />
      <Hero />

      <List />
      <Footer />
    </div>
  );
}

export default Home;
