"use client";
import Image from "next/image";
import img from "../../../public/imges/PicsArt_12-29-02.05.43.jpg";
import "./heder.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Loading from "@/app/[locale]/loading";
export default function Heder() {
  const locale = useLocale();
  const t = useTranslations("header");

  let [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://profile.alsaifgrup.com/api/main-background")
      .then((res) => res.json())
      .then((data) => setdata(data?.data));
  }, []);
  if (!data) return <Loading />;
  return (
    <main className="heder">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="info">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "linear", delay: 2.5 }}
                viewport={{ once: true }}
                className={`${locale}`}
              >
                {t("iam")}
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "linear", delay: 2.7 }}
                viewport={{ once: true }}
                className={`${locale}`}
              >
                {locale === "en" ? data[0]?.name : data[0]?.name_ar}
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "linear", delay: 2.9 }}
                viewport={{ once: true }}
                className={`${locale}`}
              >
                {locale === "en" ? data[0]?.job : data[0]?.job_ar}
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "linear", delay: 3.1 }}
                viewport={{ once: true }}
                className="icons"
              >
                <div>
                  <a target="_blank" href={data[0]?.url_facebook}>
                    <FontAwesomeIcon
                      className="icon icon-1"
                      icon={faFacebookF}
                    />
                  </a>
                </div>
                <div>
                  <a target="_blank" href={data[0]?.url_github}>
                    <FontAwesomeIcon className="icon icon-2" icon={faGithub} />
                  </a>
                </div>
                <div>
                  <a target="_blank" href={data[0]?.url_linkedin}>
                    <FontAwesomeIcon
                      className="icon icon-3"
                      icon={faLinkedinIn}
                    />
                  </a>
                </div>
                <div>
                  <a target="_blank" href={data[0]?.url_whatsapp}>
                    <FontAwesomeIcon
                      className="icon icon-4"
                      icon={faWhatsapp}
                    />
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "linear", delay: 3.3 }}
                viewport={{ once: true }}
                className="link-cv"
              >
                <a
                  className="download"
                  href={locale === "en" ? data[0]?.cv : data[0]?.cv_ar}
                  download
                >
                  <FontAwesomeIcon icon={faDownload} />
                  {t("DownloadCv")}
                </a>
                <a
                  className="download"
                  target="_blank"
                  href={locale === "en" ? data[0]?.cv : data[0]?.cv_ar}
                >
                  <FontAwesomeIcon icon={faEye} />
                  {t("OppenCv")}
                </a>
              </motion.div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "linear", delay: 3.3}}
              viewport={{ once: true }}
              className="img"
            >
              <Image
                width={10000}
                height={10000}
                src={data[0]?.cover || img}
                alt="..."
                quality={100}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
