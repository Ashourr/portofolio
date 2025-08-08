"use client";
import React, { useEffect, useState } from "react";
import "./serviceh.css";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import Loading from "@/app/[locale]/loading";
export default function ServicesPage(props) {
  const locale = useLocale();
  const t = useTranslations("skills");

  let [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://profile.alsaifgrup.com/api/services")
      .then((res) => res.json())
      .then((data) => setdata(data?.data));
  }, []);

  if (!data) return <Loading />;
  return (
    <section className="service" style={{ background: props.ba }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "linear", delay: 0.5 }}
          viewport={{ once: true }}
          className="title"
        >
          <h2>services</h2>
          <span></span>
        </motion.div>
        <div className="row">
          {data.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "linear", delay: index * 0.2 }}
              viewport={{ once: true }}
              key={item.slug || index}
              className="col-12 col-md-6 col-lg-4"
            >
              <div className="service-itme">
                <div>
                  <Image width={70} height={70} src={item.cover} alt="..." />
                </div>
                <div>
                  <h5>{locale === "ar" ? item.name_ar : item.name}</h5>
                  <p>
                    {locale === "ar" ? item.description_ar : item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
