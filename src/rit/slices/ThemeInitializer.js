"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "./ThemeSlice";
const ThemeInitializer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const defaultTheme = savedTheme || "dark"; // الوضع الافتراضي ليلي
    document.documentElement.setAttribute("data-theme", defaultTheme);
    dispatch(setTheme(defaultTheme)); // ضبط السمة في Redux
  }, [dispatch]);
  return null; // هذا المكون لا يحتاج إلى إعادة العرض
};
export default ThemeInitializer;
