/*
 * File: index.ts
 * Project: aiscaler-web-monorepo
 * File Created: Tuesday, 22nd November 2022 11:09:45 am
 * Author: v.anhphamd (v.anhphd@vinbrain.net)
 *
 * Copyright 2022 VinBrain JSC
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en';
import vi from './vi';

const resources = {
  en: en,
  vi: vi,
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'vi',
    lng: 'vi',
    ns: Object.keys(vi),
    resources,
    interpolation: {
      format: function (value, format, lng) {
        if (value instanceof Date) {
          const date = value as Date;
          const d = date.getDate();
          const m = date.getMonth() + 1;
          const y = date.getFullYear();
          const monthName = date.toLocaleString(lng, { month: 'short' });
          if (format === 'm/d/y') {
            return `${m}/${d}/${y}`;
          } else if (format === 'd/m/y') {
            return `${d}/${m}/${y}`;
          } else if (format === 'dd/LLL/yyyy') {
            return `${d}/${monthName}/${y}`;
          } else {
            return `${d}/${m}/${y}`;
          }
        }
        return value;
      },
    },
  });
export default i18n;
