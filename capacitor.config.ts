import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'finance_app_ui',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
