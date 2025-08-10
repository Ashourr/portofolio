"use client";
import React, { useEffect, useState } from "react";
import "./contact.css";
import imgPhone from "../../../public/imges/phone-call.png";
import Image from "next/image";
import ContactForm from "./ContactForm";
import Aos from "@/components/Aos";
import { ToastContainer } from "react-toastify";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Loading from "@/app/[locale]/loading";
export default function Contact() {
  const locale = useLocale();
  let [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://profile.alsaifgrup.com/api/about-me")
      .then((res) => res.json())
      .then((data) => setdata(data?.data));
  }, []);

  if (!data) return <Loading />;
  return (
    <div className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
          viewport={{ once: true }}
          className="title"
        >
          <h2>{locale === "en" ? "Contact Us" : "اتصل بنا"}</h2>
          <span></span>
        </motion.div>
        <div className="row">
          <div className="col-12 col-lg-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "linear", delay: 0.2}}
              viewport={{ once: true }}
            >
              <div className="info-itme">
                <div>
                  <Image
                    src={"/imges/phone-call.png"}
                    alt="..."
                    width={35}
                    height={35}
                  />
                </div>
                <div>
                  <h5>{locale === "en" ? "phone" : "رقم الهاتف"} :</h5>
                  <h6>{data[0]?.phone}</h6>
                </div>
              </div>
              <div className="info-itme">
                <div>
                  <Image
                    src={"/imges/email-icon.png"}
                    alt="..."
                    width={35}
                    height={35}
                  />
                </div>
                <div>
                  <h5>{locale === "en" ? "email" : "البريد الالكتروني"} :</h5>
                  <h6>{data[0]?.email}</h6>
                </div>
              </div>
              <div className="info-itme">
                <div>
                  <Image
                    src={"/imges/map-icon.png"}
                    alt="..."
                    width={35}
                    height={35}
                  />
                </div>
                <div>
                  <h5>{locale === "en" ? "location" : "الموقع"} :</h5>
                  <h6>{data[0]?.location}</h6>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "linear", delay: 0.2 }}
            viewport={{ once: true }}
            className="col-12 col-lg-8"
          >
            <div>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
      <ToastContainer
        className="custom-toast"
        position="top-right"
      />
    </div>
  );
}
