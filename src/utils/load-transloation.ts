import { Language, Translation } from "./types/language";


export const loadTranslation = async (lang: Language): Promise<Translation> => {
    const res = await fetch(`http://localhost:3000/api/translations/${lang}`);
    return await res.json();
}