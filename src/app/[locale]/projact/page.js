import React from "react";
import HederPages from "@/components/hederpages/HederPages";
import ProjectsPage from "@/components/project/ProjectsPage";
import "bootstrap/dist/css/bootstrap.min.css";
export const metadata = {
  title: "Portfolio | Projects",
};
export default function Projectpage() {
  return (
    <>
      <HederPages name={"Projects"} name_ar={"مشاريع"} />
      <ProjectsPage />
    </>
  );
}
