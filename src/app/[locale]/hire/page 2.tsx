"use client";
import { useTranslations } from "next-intl";

export default function HirePage() {
  const t = useTranslations("hire");
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold">{t("title")}</h1>
      <p className="opacity-80 mt-2">{t("coming")}</p>
    </main>
  );
}
