import React from "react";
// import ServiceH from "@/components/service/ServiceH";
import HederPages from "@/components/hederpages/HederPages"
import ServicesPage from "@/components/service/ServicesPage";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Servicepage() {
  return (
    <>
      <HederPages name={"Services"} name_ar={"خدمات"} />
      <ServicesPage ba={"#111"}  />
    </>
  );
}
