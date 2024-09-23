import * as deepl from 'deepl-node';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const authKey = "3d280e5a-9321-4c5d-b8b0-16cc4abdaf73:fx"; // Remplace par ta clé
const translator = new deepl.Translator(authKey);

// Obtenir le chemin du répertoire courant
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Afficher le chemin du dossier courant
console.log("Current directory:", process.cwd());

// Fonction pour traduire un texte
async function translateText(text, targetLang) {
    const result = await translator.translateText(text, null, targetLang);
    return result.text;
}

// Fonction pour mettre à jour le JSON
async function updateTranslations(inputFile, languages) {
    const data = JSON.parse(readFileSync(inputFile, 'utf-8'));

    const translations = { en: data.en }; // Commence avec les traductions de base

    // Traduire les entrées pour chaque langue
    for (const key in data.en) {
        for (const lang of languages) {
            // Vérifier si la traduction existe déjà
            if (!translations[lang] || !translations[lang][key]) {
                const translatedText = await translateText(data.en[key], lang);
                if (!translations[lang]) {
                    translations[lang] = {};
                }
                translations[lang][key] = translatedText; // Ajoute la traduction
            }
        }
    }

    // Remplacer 'zh' par 'cn' avant d'écrire dans le fichier
    const outputTranslations = {
        ...translations,
        cn: translations['zh'] // Ajoute les traductions de 'zh' sous la clé 'cn'
    };
    delete outputTranslations['zh']; // Supprime la clé 'zh'

    // Écrire les traductions dans un nouveau fichier JSON
    writeFileSync(path.join(__dirname, 'public/locales/translations.json'), JSON.stringify(outputTranslations, null, 2));
}

// Exemple d'utilisation
const inputFile = path.join(__dirname, 'public/locales/entry_for_translations.json');
const languages = ['fr', 'es', 'de', 'zh']; // 'zh' est utilisé pour la traduction

updateTranslations(inputFile, languages)
    .then(() => console.log('Translations updated successfully!'))
    .catch(err => console.error(err));
