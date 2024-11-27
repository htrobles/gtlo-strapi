import './global.css';
import { StrapiApp } from '@strapi/strapi/admin';

const strapiApp = {
  config: {
    theme: {
      default: 'light',
    },
  },
  bootstrap(app: StrapiApp) {},
};

export default strapiApp;
