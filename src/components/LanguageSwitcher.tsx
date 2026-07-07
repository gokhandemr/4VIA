"use client";

import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("LanguageSwitcher");
  const pathname = usePathname();
  const otherLocale = locale === "en" ? "tr" : "en";

  return (
    <Link
      href={pathname}
      locale={otherLocale}
      aria-label={t("label")}
      className="flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
    >
      <Languages className="h-4 w-4" aria-hidden />
      {otherLocale.toUpperCase()}
    </Link>
  );
}
