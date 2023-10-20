import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx}'],
  emitPackage: true,

  // Files to exclude
  exclude: [],
  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'ui/styled-system',
});
