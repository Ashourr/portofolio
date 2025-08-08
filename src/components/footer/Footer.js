"use client";
import React, { useEffect, useState } from "react";
import "./footer.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import Loading from "@/app/[locale]/loading";
export default function Footer() {
  const locale = useLocale();

  let [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://profile.alsaifgrup.com/api/about-me")
      .then((res) => res.json())
      .then((data) => setdata(data?.data));
  }, []);

  let [data2, setdata2] = useState([]);
  useEffect(() => {
    fetch("https://profile.alsaifgrup.com/api/main-background")
      .then((res) => res.json())
      .then((data2) => setdata2(data2?.data));
  }, []);


  if (!data) return <Loading />;
  if (!data2) return <Loading />;
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "linear", delay: 0.5 }}
            viewport={{ once: true }}
            className="col-12 col-md-6 col-lg-3"
          >
            <div className="short">
              <div>
                {locale === "en" ? (
                  <Link href={"/"}>
                    <Image
                      src={"/imges/logo.png"}
                      alt="..."
                      width={150}
                      height={45}
                    />
                  </Link>
                ) : (
                  <h1 className="logo-text">عاشور</h1>
                )}
              </div>
              <p>
                {locale === "ar"
                  ? data[0]?.description_ar?.slice(0, 100)
                  : data[0]?.description?.slice(0, 100)}
              </p>
              <div className="icons">
                <div>
                  <a target="_blank" href={data2[0]?.url_facebook}>
                    <FontAwesomeIcon
                      className="icon icon-1"
                      icon={faFacebookF}
                    />
                  </a>
                </div>
                <div>
                  <a target="_blank" href={data2[0]?.url_github}>
                    <FontAwesomeIcon className="icon icon-2" icon={faGithub} />
                  </a>
                </div>
                <div>
                  <a target="_blank" href={data2[0]?.url_linkedin}>
                    <FontAwesomeIcon
                      className="icon icon-3"
                      icon={faLinkedinIn}
                    />
                  </a>
                </div>
                <div>
                  <a target="_blank" href={data2[0]?.url_whatsapp}>
                    <FontAwesomeIcon
                      className="icon icon-4"
                      icon={faWhatsapp}
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "linear", delay: 0.7 }}
            viewport={{ once: true }}
            className="col-12 col-md-6 col-lg-3"
          >
            <div className="Quick-links">
              <h4>{locale === "ar" ? "روابط سريعة" : "Quick links"}</h4>
              <ul>
                <li>
                  <Link href={`/${locale}`}>
                    {locale === "ar" ? "الرئيسية" : "Home"}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/about`}>
                    {locale === "ar" ? "من انا" : "About Me"}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/service`}>
                    {locale === "ar" ? "الخدمات" : "Services"}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/sklis`}>
                    {locale === "ar" ? "المهارات" : "Skills"}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/projact`}>
                    {locale === "ar" ? "المشاريع" : "Projects"}
                  </Link>
                </li>
                <li>
                  <Link href={`/${locale}/contact`}>
                    {locale === "ar" ? "اتصل بنا" : "Contact Us"}
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "linear", delay: 0.9 }}
            viewport={{ once: true }}
            className="col-12 col-md-6 col-lg-3"
          >
            <div className="services">
              <h4>{locale === "ar" ? "خدمات" : "Services"}</h4>
              <ul>
                <li>{locale === "ar" ? "تصميم ويب" : "Web Design"}</li>
                <li>{locale === "ar" ? "تطبيق الويب" : "Web Application"}</li>
                <li>{locale === "ar" ? "تطوير ويب" : "Web Development"}</li>
                <li>
                  {locale === "ar" ? "تصميم متجاوب" : "Responsive Design"}
                </li>
                <li>{locale === "ar" ? "اختبار المستخدم" : "User Testing"}</li>
                <li>
                  {locale === "ar"
                    ? "تصميم صفحة الهبوت"
                    : "Landing Page Design"}
                </li>
              </ul>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "linear", delay: 1.1 }}
            viewport={{ once: true }}
            className="col-12 col-md-6 col-lg-3"
          >
            <div className="contact-footer">
              <h4>{locale === "ar" ? "اتصل بنا" : "Contact Us"}</h4>
              <ul>
                <li>
                  <div className="itme">
                    <FontAwesomeIcon icon={faPhone} />
                    <h6>{data[0]?.phone}</h6>
                  </div>
                </li>
                <li>
                  <div className="itme">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h6>{data[0]?.email}</h6>
                  </div>
                </li>
                <li>
                  <div className="itme">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <h6>{data[0]?.location}</h6>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
          <hr className="hr" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "linear", delay: 1.3 }}
            viewport={{ once: true }}
            className="copy-right"
          >
            <p>Copyright 2025 &copy; All Right Reserved</p>
            <div className="dev">
              <p>front end : </p>
              <a
                href="https://www.facebook.com/profile.php?id=100005869890293"
                target="_blank"
              >
                Ashour
              </a>
              ,<p>back end : </p>
              <a
                href="https://www.facebook.com/Shehabmohammed88"
                target="_blank"
              >
                shehab
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
