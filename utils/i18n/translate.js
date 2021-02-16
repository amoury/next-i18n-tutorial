import en from './en.json';
import ar from './ar.json';
import fr from './fr.json';

const TRANSLATIONS = {
  en,
  ar,
  fr
}

const translate = (language = 'en') => (token) => {
  let value;

  try {
    value = TRANSLATIONS[language][token];
  } catch (error) {
    console.error('Translation Error ', err);
    value = token;
  }

  return value;
}

export default translate;
