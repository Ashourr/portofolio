"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { toast } from "react-toastify";
import { useLocale, useTranslations } from "next-intl";

export default function ContactForm() {
  const locale = useLocale();
  // const t = useTranslations("projects");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error(
        `${
          locale === "en"
            ? "⚠ Please fill all the fields"
            : "⚠ يرجى تعبئة جميع الحقول"
        }`
      );
      return false;
    }

    if (
      name.trim().length < 5 ||
      subject.trim().length < 5 ||
      message.trim().length < 5
    ) {
      toast.error(
        `${
          locale === "ar"
            ? "⚠ كل الحقول يجب أن تحتوي على 5 أحرف على الأقل"
            : "⚠ All fields must contain at least 5 characters"
        }`
      );
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error(`${locale === "ar" ? "⚠ البريد الألكتروني غير صحيح" : "⚠ Invalid email"}`);
      return false;
    }

    return true;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      let response = await fetch("https://profile.alsaifgrup.com/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          description: formData.message,
        }),
      });

      console.log(response);
      toast.success(locale === "en" ? "Message sent successfully" : "تم ارسال الرسالة بنجاح", {
        theme: "colored",
        position: "top-right",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error(`${locale === "en" ? "Message failed to send" : "فشل في ارسال الرسالة"}`, {
        theme: "dark",
        position: "top-right",
      });
    }
  };

  return (
    <form onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder={locale === "en" ? "Enter your name" : "اكتب اسمك"}
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={
          locale === "en" ? "Enter your email" : "اكتب بريدك الالكتروني"
        }
        required
      />
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder={
          locale === "en" ? "Enter your subject" : "اكتب عنوان الرسالة"
        }
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder={locale === "en" ? "Enter your message" : "اكتب رسالتك"}
        required
      />
      <div className="button">
        <button type="submit">{locale === "en" ? "Send" : "ارسل"}</button>
      </div>
    </form>
  );
}
