export const locales = ["ht", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ht";
