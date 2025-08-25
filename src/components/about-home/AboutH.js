"use client";
import "./abouth.css";
import imgAbout from "../../../public/imges/PicsArt_07-07-09.53.10.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faEnvelope,
  faLocationDot,
  faMobile,
  faUserGraduate,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Loading from "@/app/[locale]/loading";

export default function AboutH() {
  const locale = useLocale();
  const t = useTranslations("about-home");
  let [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://ashar.alsaifgrup.com/api/about-me")
      .then((res) => res.json())
      .then((data) => setdata(data?.data));
  }, []);
  if (!data) return <Loading />;
  return (
    <section className="about">
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
          <div className="col-12 col-md-6 col-lg-4 imgAbout">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "linear" }}
              viewport={{ once: true }}
              className="img"
            >
              <Image
                width={1000}
                height={1000}
                src={data[0]?.cover || imgAbout}
                alt={locale === "ar" ? "صورة شخصية" : "Personal Image"}
              />
            </motion.div>
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <div className="info">
              <motion.h2
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "linear" }}
                viewport={{ once: true }}
              >
                {t("Who-am")}
              </motion.h2>
              {locale === "ar" ? (
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "linear" }}
                  viewport={{ once: true }}
                  dangerouslySetInnerHTML={{ __html: data[0]?.description_ar }}
                />
              ) : (
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "linear" }}
                  viewport={{ once: true }}
                  dangerouslySetInnerHTML={{ __html: data[0]?.description }}
                />
              )}
              <motion.h3
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "linear" }}
                viewport={{ once: true }}
              >
                {t("PersonalInfo")}
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
                viewport={{ once: true }}
                className="aboutinfo"
              >
                <div
                  style={{
                    gap: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "linear", delay: 0.3 }}
                    viewport={{ once: true }}
                    className="itme"
                  >
                    <div>
                      <FontAwesomeIcon
                        icon={faUserTie}
                        className="icon icon-0"
                      />
                    </div>
                    <div>
                      <h5>{locale === "ar" ? "الاسم :" : "Name :"}</h5>
                      <h6>
                        {locale === "ar" ? data[0]?.name_ar : data[0]?.name}
                      </h6>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "linear", delay: 0.4 }}
                    viewport={{ once: true }}
                    className="itme"
                  >
                    <div>
                      <FontAwesomeIcon
                        icon={faMobile}
                        className="icon icon-1"
                      />
                    </div>
                    <div>
                      <h5>{locale === "ar" ? "الهاتف :" : "Phone :"}</h5>
                      <h6 style={{ direction: "ltr" }}>{data[0]?.phone}</h6>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "linear", delay: 0.5 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: "10px" }}
                    className="itme"
                  >
                    <div>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="icon icon-2"
                      />
                    </div>
                    <div>
                      <h5>{locale === "ar" ? "الموقع :" : "Location :"}</h5>
                      <h6>
                        {locale === "ar" ? "مصر - الفيوم" : "Egypt - El-Faiyum"}
                      </h6>
                    </div>
                  </motion.div>
                </div>
                <div
                  style={{
                    gap: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "linear", delay: 0.6 }}
                    viewport={{ once: true }}
                    className="itme"
                  >
                    <div>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="icon icon-3"
                      />
                    </div>
                    <div>
                      <h5>
                        {locale === "ar" ? "البريد الالكتروني :" : "Email :"}
                      </h5>
                      <h6>{data[0]?.email}</h6>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "linear", delay: 0.7 }}
                    viewport={{ once: true }}
                    className="itme"
                  >
                    <div>
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="icon icon-4"
                      />
                    </div>
                    <div>
                      <h5>
                        {locale === "ar" ? "تاريخ الميلاد :" : "Birthday :"}
                      </h5>
                      <h6>{data[0]?.birthday}</h6>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "linear", delay: 0.8 }}
                    viewport={{ once: true }}
                    className="itme"
                  >
                    <div>
                      <FontAwesomeIcon
                        icon={faUserGraduate}
                        className="icon icon-5"
                      />
                    </div>
                    <div>
                      <h5>{locale === "ar" ? "التعليم :" : "Education :"} </h5>
                      <h6>
                        {locale === "ar"
                          ? "طالب بالفرقة الرابعة في المعهد التكنولوجي العالي ببني سويف – ( قسم برمجة )."
                          : "A fourth-year student at the Higher Technological Institute in Beni Suef – ( Programming Department )"}
                      </h6>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
