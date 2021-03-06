import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import ar from '../locales/ar.json';
import cs from '../locales/cs.json';
import de from '../locales/de.json';
import en from '../locales/en.json';
import es from '../locales/es.json';
import fr from '../locales/fr.json';
import id from '../locales/id.json';
import it from '../locales/it.json';
import ja from '../locales/ja.json';
import mg from '../locales/mg.json';
import ml from '../locales/ml.json';
import nl_NL from '../locales/nl_NL.json';
import pt from '../locales/pt.json';
import pt_BR from '../locales/pt_BR.json';
import sw from '../locales/sw.json';
import tl from '../locales/tl.json';
import tr from '../locales/tr.json';
import uk from '../locales/uk.json';
import { setLocale } from '../store/actions/userPreferences';
import * as config from '../config';

const translatedMessages = {
  ar: ar,
  cs: cs,
  de: de,
  en: en,
  es: es,
  fr: fr,
  id: id,
  it: it,
  ja: ja,
  mg: mg,
  ml: ml,
  nl_NL: nl_NL,
  pt: pt,
  pt_BR: pt_BR,
  sw: sw,
  tl: tl,
  tr: tr,
  uk: uk,
};

// commented out the languages that we are not supporting on the first production release of TM4
const supportedLocales = [
  // { value: 'ar', label: 'Arabic' },
  { value: 'cs', label: 'Česky' },
  { value: 'de', label: 'Deutsch' },
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'id', label: 'Indonesia' },
  { value: 'it', label: 'Italiano' },
  // { value: 'ja', label: '日本語' },
  // { value: 'mg', label: 'Malagasy' },
  // { value: 'ml', label: 'Malayalam' },
  { value: 'nl_NL', label: 'Nederlands' },
  { value: 'pt', label: 'Português' },
  { value: 'pt_BR', label: 'Português (Brasil)' },
  // { value: 'sw', label: 'Kiswahili' },
  // { value: 'tl', label: 'Filipino (Tagalog)' },
  // { value: 'tr', label: 'Türkçe' },
  { value: 'uk', label: 'Українська' },
];

function getSupportedLocale(locale) {
  if (locale) {
    let filtered = supportedLocales.filter(i => i.value === locale);
    if (filtered.length) {
      return filtered[0];
    }
    // if we don't have the specific language variation, return the generic locale
    filtered = supportedLocales.filter(i => i.value === locale.substr(0, 2));
    if (filtered.length) {
      return filtered[0];
    }
  }
  return {};
}

function getTranslatedMessages(locale) {
  let localeCode = getSupportedLocale(locale);
  if (localeCode.hasOwnProperty('value')) {
    return translatedMessages[localeCode.value];
  }
  return translatedMessages[locale] || translatedMessages[config.DEFAULT_LOCALE];
}

/* textComponent is for orderBy <select>, see codesandbox at https://github.com/facebook/react/issues/15513 */
let ConnectedIntl = props => (
  <IntlProvider
    key={props.locale}
    locale={props.locale.substr(0, 2)}
    textComponent={React.Fragment}
    messages={getTranslatedMessages(props.locale)}
  >
    {props.children}
  </IntlProvider>
);

const mapStateToProps = state => ({
  locale: state.preferences.locale || navigator.language,
});

ConnectedIntl = connect(
  mapStateToProps,
  { setLocale },
)(ConnectedIntl);

export { ConnectedIntl, supportedLocales, getSupportedLocale, getTranslatedMessages };
