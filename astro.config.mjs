import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroI18next(), sitemap(), svelte()],
  site: 'https://odzi.dog',
  base: '/'
});