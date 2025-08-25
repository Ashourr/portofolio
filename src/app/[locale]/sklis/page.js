import React from "react";
import HederPages from "@/components/hederpages/HederPages";
import SkillsPage from "@/components/skill/SkillSPage";
import "bootstrap/dist/css/bootstrap.min.css";
export const metadata = {
  title: "Portfolio | Skill",
};
export default function Skillspage() {
  return (
    <>
      <HederPages name={"Skill"} name_ar={"مهارات"} />
      <SkillsPage />
    </>
  );
}
