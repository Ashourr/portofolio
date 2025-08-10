"use client";
import React, { useEffect, useState } from "react";
import "./skill.css";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Loading from "@/app/[locale]/loading";
export default function Skill() {
  const locale = useLocale();
  const t = useTranslations("skills");

  let [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://profile.alsaifgrup.com/api/skills")
      .then((res) => res.json())
      .then((data) => setdata(data?.data));
  }, []);
  if (!data) return <Loading />;
  return (
    <div className="skill">
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
          {data.slice(0, 6).map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "linear", delay: index * 0.2 }}
              viewport={{ once: true }}
              key={item.slug || index}
              className="col-12 col-md-6 col-lg-4"
            >
              <div className="skill-itme">
                <div>
                  <Image width={70} height={70} src={item.cover} alt="..." />
                </div>
                <h4>{locale === "ar" ? item.name_ar : item.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
          viewport={{ once: true }}
          className="link"
        >
          <Link href={`/${locale}/sklis`}>
            {t("link")}
            <FontAwesomeIcon className="i" icon={faArrowRight} />
          </Link>
        </motion.div>
    </div>
  );
}
