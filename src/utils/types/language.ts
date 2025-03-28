export enum Language {
    ARABIC = "ar",
    ENGLISH = "en",
}

export interface Translation {
    days: string[];
    welcome: string;
    schedule: string;
    prayer: string;
    toggleLanguage: string;
    toggleTheme: string;
    mainTitle: string;
    day: string;
    prayers: string[];
    shefa: string;
    appLanguage: {
        en: string;
        ar: string;
    };
    navbarLinks: {
        home: string;
        prayers: string;
        schedule: string;
        settings: string;
    };
    comingSoon: {
        title: string;
        description: string;
    };
}

