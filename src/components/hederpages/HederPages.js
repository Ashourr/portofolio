"use client";
import React from "react";
import "./hederpages.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Loading from "@/app/[locale]/loading";
export default function HederAbout(props) {
  const locale = useLocale();
  if (!props) return <Loading />;
  return (
    <div className="heder-about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "linear"  }}
        viewport={{ once: true }}
      >
        <h1>{locale === "ar" ? props.name_ar : props.name}</h1>
        <div className="link">
          <Link href={"/"}>
            {locale === "ar" ? "الرئيسية" : "Home"}
            <FontAwesomeIcon className="i" icon={faArrowRight} />
          </Link>
          <h6>{locale === "ar" ? props.name_ar : props.name}</h6>
        </div>
      </motion.div>
    </div>
  );
}
