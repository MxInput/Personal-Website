// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [{
    provider: fontProviders.local(),
    name: "Sumpfdeutschensportschrift-sdin",
    cssVariable: "--font-sumpfdeutschensportschrift-sdin",
    options: {
      variants: [{
        src: ['./src/assets/fonts/SumpfdeutschensportschriftsdinRegular-Zp1DK.ttf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }, {
    provider: fontProviders.local(),
    name: "SsdSeptentrionis-ovDwd",
    cssVariable: "--font-SsdSeptentrionis-ovDwd",
    options: {
      variants: [{
        src: ['./src/assets/fonts/SsdSeptentrionis-ovDwd.ttf'],
        weight: 'normal',
        style: 'normal'
      }]
    }
  }]
});
