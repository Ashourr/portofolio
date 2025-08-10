"use client";
import React, { useEffect, useState } from "react";
import "./project.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLaptopCode,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Aos from "../Aos";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Loading from "@/app/[locale]/loading";
export default function ProjectsPage() {
  const locale = useLocale();
  const t = useTranslations("projects");

  let [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://profile.alsaifgrup.com/api/projects")
      .then((res) => res.json())
      .then((data) => setdata(data?.data));
  }, []);
  if (!data) return <Loading />;
  return (
    <div className="project">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
          viewport={{ once: true }}
          className="title"
        >
          <h2>{t("title")}</h2>
          <span></span>
        </motion.div>
        <div className="row">
          {data.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "linear", delay: index * 0.2 }}
              viewport={{ once: true }}
              key={item.slug}
              className="col-12 col-md-6 col-lg-4"
            >
              <div className="project-itme">
                <div className="img">
                  <Image
                    src={item.cover}
                    alt="..."
                    width={1000}
                    height={1000}
                  />
                </div>
                <h6>{locale === "ar" ? item.name_ar : item.name}</h6>
                <p>Html, Css, js, bootstrap</p>
                <div className="links">
                  <a target="_blank" href="..." className="live-demo">
                    <FontAwesomeIcon
                      className="icon-live"
                      icon={faLaptopCode}
                    />
                    {t("live")}
                  </a>
                  <a target="_blank" href={item.url} className="github">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Aos />
    </div>
  );
}
