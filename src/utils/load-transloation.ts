import { Language, Translation } from "./types/language";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const loadTranslation = async (lang: Language): Promise<Translation> => {
    const res = await fetch(`${baseUrl}/api/translations/${lang}`);
    return await res.json();
}