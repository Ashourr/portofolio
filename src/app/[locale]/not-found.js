// app/not-found.js
import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

export default function NotFound() {
  const headersList = headers();
  const locale = headersList.get("x-next-intl-locale") || "en";

  return (
    <div className="not-found-page">
      <main className="not-found-container">
        <div className="not-found-content">
          <p className="error-code">
            {locale === "en" ? "Error 404" : "خطأ 404"}
          </p>
          <h1 className="error-title">
            {locale === "en" ? "Page Not Found" : "الصفحة غير موجودة"}
          </h1>
          <p className="error-message">
            {locale === "en"
              ? "The page you are looking for does not exist"
              : "لا توجد صفحة بهذا الاسم"}
          </p>
          <div className="home-link">
            <Link href={`/${locale}`}>
              {locale === "en" ? "Go to Home" : "العودة إلى الصفحة الرئيسية"}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
