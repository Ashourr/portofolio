"use client";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import "./SplashScreen.css";
import Loading from "@/app/[locale]/loading";
import Image from "next/image";

export default function SplashScreen({ children }) {
  const [showSplash, setShowSplash] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // 2 ثانية

    return () => clearTimeout(timer);
  }, []);

  let [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://ashar.alsaifgrup.com/api/main-background")
      .then((res) => res.json())
      .then((data) => setdata(data?.data));
  }, []);
  if (!data) return <Loading />;
  if (showSplash) {
    return (
      <div className="SplashScreen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          <Image
            width={100}
            height={100}
            alt="..."
            src="/imges/code-svgrepo-com.png"
            quality={100}
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {locale === "ar" ? "مرحبًا بك في موقعي" : "Welcome to My Website"}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {locale === "ar" ? "أنا" : "I am"}
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {locale === "en" ? "Mohammed Ashour":"محمد عاشور"}
        </motion.h3>
        <motion.h4
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {locale === "en" ? "Front-End Web Developer":"مطور واجهات الويب الأمامية"}
        </motion.h4>
      </div>
    );
  }
  return <>{children}</>;
}
