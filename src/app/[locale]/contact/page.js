import React from "react";
import HederPages from "@/components/hederpages/HederPages";
import Contact from "@/components/contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
export const metadata = {
  title: "Portfolio | Contact US",
};
export default function Contactpage() {
  return (
    <>
      <HederPages name={"Contact US"} name_ar={"اتصل بنا"} />
      <Contact />
    </>
  );
}
