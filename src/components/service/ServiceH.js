"use client";
import React, { useEffect, useState } from "react";
import "./serviceh.css";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Loading from "@/app/[locale]/loading";
export default function ServiceH(props) {
  const locale = useLocale();
  const t = useTranslations("service");

  let [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://ashar.alsaifgrup.com/api/services")
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
              transition={{ duration: 0.6, ease: "linear", delay: index * 0.05 }}
              viewport={{ once: true }}
              key={item.slug || index}
              className="col-12 col-md-6 col-lg-4"
            >
              <div className="service-itme">
                <div>
                  <Image
                    style={{ marginBottom: "2px" }}
                    width={120}
                    height={120}
                    src={item.cover}
                    alt={locale === "ar" ? item.name_ar : item.name}
                  />
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
          viewport={{ once: true }}
          className="link"
        >
          <Link href={`/${locale}/service`}>
            {t("link")}
            <FontAwesomeIcon className="i" icon={faArrowRight} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
