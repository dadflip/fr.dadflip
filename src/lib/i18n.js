// src/lib/i18n.js
import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';

// Enregistrez les langues disponibles
register('en', () => import('$lib/locales/en.json'));
register('fr', () => import('$lib/locales/fr.json'));

// Initialisez la langue par défaut à partir du navigateur ou définissez-en une par défaut
init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(), // Vous pouvez remplacer ceci par une langue par défaut si nécessaire
});

// Optionnel : définir une locale initiale par défaut si `getLocaleFromNavigator` échoue
locale.set('en'); // Assurez-vous que cette ligne est appelée si vous avez besoin d'une langue par défaut spécifique
