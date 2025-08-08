"use client";
import Link from "next/link";
import imgNav from "../../../public/imges/logo.png";
import "./navbar.css";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "../../../i18n/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBars,
  faBriefcase,
  faHouse,
  faPassport,
  faSliders,
  faSun,
  faUserTie,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/rit/slices/ThemeSlice";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const t = useTranslations("navbar");
  const tLocaleSwitcher = useTranslations("LocaleSwitcher");

  const locale = useLocale();
  const nextLocale = locale === "en" ? "ar" : "en";
  const router = useRouter();
  const pathname = usePathname(); // to get current page path

  const handleChangeLanguage = () => {
    router.replace(pathname, { locale: nextLocale }); // this avoids /ar/en/...
  };

  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className={`nav-bar fixed-top w-100 ${scrolled && "backriund"}`}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" ,delay: pathname === "/" ? 2.5 : ""}}
        viewport={{ once: true }}
        className="container pe-3 ps-3 p-lg-0"
      >
        <nav className={`navbar navbar-expand-lg ${scrolled && "backriund"}`}>
          <Link href="/" className="navbar-brand">
            <div className="img">
              {locale === "en" ? (
                <Image src={imgNav} alt="logo" />
              ) : (
                <h1 className="logo-text">عاشور</h1>
              )}
            </div>
          </Link>

          <div className="d-flex align-items-center">
            {/* Language Switcher */}
            <div className="lang" onClick={handleChangeLanguage}>
              {tLocaleSwitcher(nextLocale === "en" ? "english" : "arabic")}
            </div>

            {/* Theme Toggle */}
            <div onClick={handleToggleTheme}>
              <FontAwesomeIcon
                icon={theme === "light" ? faMoon : faSun}
                className="ico2"
              />
            </div>

            {/* Navbar toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <FontAwesomeIcon icon={open ? faXmark : faBars} />
            </button>
          </div>

          <div
            className={`collapse navbar-collapse ${open ? "show" : ""}`}
            id="mian"
          >
            <ul
              className={`navbar-nav ${
                nextLocale === "en" ? "me-auto" : "ms-auto"
              } mb-2 mb-lg-0`}
            >
              <li className="nav-item">
                <Link
                  href={`/${locale}`}
                  className={`nav-link ${
                    pathname === `/${locale}` ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon className="link-icon" icon={faHouse} />
                  {t("home")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={`/${locale}/about`}
                  className={`nav-link ${
                    pathname === `/${locale}/about` ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon className="link-icon" icon={faUserTie} />
                  {t("about")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={`/${locale}/service`}
                  className={`nav-link ${
                    pathname === `/${locale}/service` ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon className="link-icon" icon={faPassport} />
                  {t("service")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={`/${locale}/sklis`}
                  className={`nav-link ${
                    pathname === `/${locale}/sklis` ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon className="link-icon" icon={faSliders} />
                  {t("skills")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={`/${locale}/projact`}
                  className={`nav-link ${
                    pathname === `/${locale}/projact` ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon className="link-icon" icon={faBriefcase} />
                  {t("projects")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={`/${locale}/contact`}
                  className={`nav-link ${
                    pathname === `/${locale}/contact` ? "active" : ""
                  }`}
                >
                  <FontAwesomeIcon className="link-icon" icon={faAddressBook} />
                  {t("contact")}
                </Link>
              </li>

              {/* Extra theme/lang buttons for large screens */}
              <li className="mood" onClick={handleToggleTheme}>
                <FontAwesomeIcon
                  icon={theme === "light" ? faMoon : faSun}
                  className="ico1"
                />
              </li>
              <li className="lang-but" onClick={handleChangeLanguage}>
                {tLocaleSwitcher(nextLocale === "en" ? "english" : "arabic")}
              </li>
            </ul>
          </div>
        </nav>
      </motion.div>
    </div>
  );
}
