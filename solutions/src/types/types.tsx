export type Translations = {
    [key: string]: string; // Ceci est correct
};

export type SupportedLanguages = 'en' | 'fr' | 'es' | 'de' | 'cn'; // Ajoute d'autres langues ici

export type LanguageTranslations = {
    en: Translations;
    fr: Translations;
    es: Translations;
    de: Translations; // Ajout de l'allemand
    cn: Translations; // Ajout du chinois
};
