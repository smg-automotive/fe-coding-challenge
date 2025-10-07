// eslint-disable-next-line import/no-unresolved
import nextConfig from '@smg-automotive/eslint-config/next';

export default [
  ...nextConfig,
  {
    ignores: ['next-env.d.ts'],
  },
];
