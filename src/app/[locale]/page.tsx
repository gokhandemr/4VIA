import { Construction } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <div className="relative flex flex-1 flex-col">
      <header className="absolute right-5 top-5">
        <LanguageSwitcher />
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 text-center">
        <h1 className="text-5xl font-bold tracking-[0.3em] text-neutral-100 sm:text-6xl">
          4VIA
        </h1>

        <div className="flex flex-col items-center gap-4">
          <Construction
            className="h-12 w-12 text-amber-400"
            strokeWidth={1.5}
            aria-hidden
          />
          <h2 className="text-2xl font-semibold text-neutral-200 sm:text-3xl">
            {t("title")}
          </h2>
          <p className="max-w-md text-base text-neutral-400">
            {t("description")}
          </p>
        </div>
      </main>

      <footer className="py-6 text-center text-xs text-neutral-500">
        {t("copyright", { year: new Date().getFullYear() })}
      </footer>
    </div>
  );
}
