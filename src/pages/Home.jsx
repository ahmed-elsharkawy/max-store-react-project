import React from "react";
import MyHeader from "../components/MyHeader";
import SectionWindow from "../components/SectionWindow";

function Home() {
  return (
    <>
      <MyHeader></MyHeader>
      <SectionWindow section="electronics" />
      <SectionWindow section="men's clothing" />
      <SectionWindow section="jewelery" />
    </>
  );
}

export default Home;
