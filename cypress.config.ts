import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(_on, _config) {
      // import plugins here
    },
    baseUrl: 'http://localhost:3000',
  },
});
