// eslint-disable-next-line @typescript-eslint/no-require-imports
import { version } from '../../package.json' ;

export const environment = {
  production: true,
  appVersion: version,

  // Replace this with your server API URL
  // We assigned it to empty string for the Fake API
  apiUrl: 'https://devconnect-backend-production.up.railway.app',
  // apiUrl: 'http://localhost:8080',

  settings: {
    auth: {
      // OAuth2 credentials
      clientId: 'fake-client-id', // <Your auth client id here>
      secretId: 'fake-secret-id', // <Your auth secret id here>

      // keys to store tokens at local storage
      accessTokenKey: 'DoPS3ZrQjM',
      refreshTokenKey: 'nmlP8PW2nb',
    },
  },
};
