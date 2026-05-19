import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cargalo.app',
  appName: 'Cargalo',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
