"use client";
import React, { useEffect, useState } from "react";
import "./skill.css";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Loading from "@/app/[locale]/loading";
export default function SkillsPage() {
  const locale = useLocale();
  const t = useTranslations("skills");

  let [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://ashar.alsaifgrup.com/api/skills")
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
          {data.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "linear", delay: index * 0.05 }}
              viewport={{ once: true }}
              key={item.slug || index}
              className="col-12 col-md-6 col-lg-4"
            >
              <div className="skill-itme">
                <h4>{locale === "ar" ? item.name_ar : item.name}</h4>
                <div>
                  <Image
                    width={70}
                    height={70}
                    src={item.cover}
                    alt={locale === "ar" ? item.name_ar : item.name}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
