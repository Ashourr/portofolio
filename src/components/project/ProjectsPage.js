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
import { toast, ToastContainer } from "react-toastify";
import ProjectModal from "./ProjectModal";
export default function Project() {
  const locale = useLocale();
  const t = useTranslations("projects");

  const [selectedImages, setSelectedImages] = useState(null);
  let [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://profile.alsaifgrup.com/api/projects")
      .then((res) => res.json())
      .then((data) => setdata(data?.data));
  }, []);
  if (!data) return <Loading />;
  return (
    <div style={{ zIndex: selectedImages ? 999999 : 2 }} className="project">
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
                {!item.url_github && (
                  <span className="api">
                    {locale === "ar" ? " متصل ب Api" : "Connected with Api"}
                  </span>
                )}
                <div className="img">
                  <Image
                    src={item.cover[0].file_name}
                    alt="..."
                    width={1000}
                    height={1000}
                    onClick={() => {
                      const imgs =
                        // item.cover.length > 1
                        item.cover.map((img) => img.file_name);
                      // : [item.cover[0].file_name];

                      setSelectedImages(imgs);
                    }}
                  />
                </div>
                <h6>{locale === "ar" ? item.name_ar : item.name}</h6>
                <p>
                  {locale === "ar" ? item.description_ar : item.description}
                </p>
                <div className="lags">
                  {item.languages.map((tag, index) => (
                    <Link key={tag.id || index} href={"#"} className="lag">
                      {locale === "ar" ? tag.name_ar : tag.name}
                    </Link>
                  ))}
                </div>
                <div className="links">
                  <a target="_blank" href={item.url} className="live-demo">
                    <FontAwesomeIcon
                      className="icon-live"
                      icon={faLaptopCode}
                    />
                    {t("live")}
                  </a>
                  {item.url_github ? (
                    <a
                      target="_blank"
                      href={item.url_github}
                      className="github"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  ) : (
                    <span
                      className="github"
                      onClick={() =>
                        toast.error(
                          locale === "ar"
                            ? "🔒 الرابط محمي. يرجى التواصل معنا للاطلاع عليه."
                            : "🔒 Protected link. Please contact us to view it."
                        )
                      }
                      style={{ cursor: "pointer", color: "#888" }}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Aos />
      {selectedImages && (
        <ProjectModal
          images={selectedImages}
          onClose={() => setSelectedImages(null)}
        />
      )}
      <ToastContainer className="custom-toast" />
    </div>
  );
}
