import {Platform, NativeModules} from 'react-native';
import I18n from 'i18n-js';

const normalizeTranslate = {
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  en: 'en_US',
  pt_US: 'pt_BR',
};

I18n.translations = {
  en_US: {...require('./en-US')},
  pt_BR: {...require('./pt-BR')},
};

const _getLanguageByDevice = () => {
  let locale = null;

  if (Platform.OS === 'ios') {
    if (parseInt(Platform.Version, 10) >= 13) {
      locale = NativeModules.SettingsManager.settings.AppleLanguages[0];
    } else {
      locale = NativeModules.SettingsManager.settings.AppleLocale;
    }
  } else {
    locale = NativeModules.I18nManager.localeIdentifier;
  }

  return locale;
};

export const configureLanguareToi18N = () => {
  const language = _getLanguageByDevice();
  console.log(language);

  const translateNormalize = normalizeTranslate[language];

  const iHaveThisLanguage =
    I18n.translations.hasOwnProperty(translateNormalize);

  iHaveThisLanguage
    ? (I18n.locale = translateNormalize)
    : (I18n.defaultLocale = 'pt_BR');
};

export const translate = key => I18n.t(key);
