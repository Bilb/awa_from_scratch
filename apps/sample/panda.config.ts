import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './app/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
    './node_modules/ui/styled-system/src/**/*.{ts,tsx,js,jsx}',
  ],

  // Files to exclude
  exclude: [],
  jsxFramework: 'react',
  emitPackage: true,

  // The output directory for your css system
  outdir: 'ui/styled-system',
});
