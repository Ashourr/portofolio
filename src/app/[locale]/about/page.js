import AboutH from "@/components/about-home/AboutH";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HederPages from "@/components/hederpages/HederPages"
export default function Aboutpage() {
  return (
    <>
      <HederPages name={"About Me"} name_ar={"من انا"} />
      <AboutH />
    </>
  );
}
