"use client";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import "./SplashScreen.css";

export default function SplashScreen({ children }) {
  const [showSplash, setShowSplash] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // 2 ثانية

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="SplashScreen">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {locale === "ar" ? "مرحبًا بك في موقعي" : "Welcome to My Website"}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {locale === "ar" ? "أنا" : "I am"}
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {locale === "ar" ? "محمد عاشور" : "Mohamed Ashour"}
        </motion.h3>
        <motion.h4
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {locale === "ar" ? "مطور الواجهة الأمامية" : "Front-End Developer"}
        </motion.h4>
      </div>
    );
  }

  // عرض المحتوى العادي بعد انتهاء السبلّاش
  return <>{children}</>;
}
