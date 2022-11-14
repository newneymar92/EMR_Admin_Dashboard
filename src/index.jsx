import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';

import messagesVietNamese from '@common/translations/vi';
import messagesEnglish from '@common/translations/en';

import App from './App';
import store from './store';

import './styles/theme.less';
import './styles/index.scss';

dayjs.locale('vi');

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false }, // React already does escaping
  debug: true,
  resources: {
    en: {
      translation: messagesEnglish,
    },
    vi: {
      translation: messagesVietNamese,
    },
  },
  lng: 'vi', // language to use
  fallbackLng: 'vi',
});

const persistor = persistStore(store);

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root'),
);
