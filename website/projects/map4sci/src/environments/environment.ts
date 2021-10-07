import 'zone.js/plugins/zone-error';

import { sharedEnvironment } from './environment.shared';


export const environment = {
  ...sharedEnvironment,
  production: false,
  googleAnalyticsToken: 'G-B3DT7XPMRT'
};
