import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
    shikiConfig: {
      theme: 'material-ocean',
    },
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
  site: "https://puida.xyz",
  server: {
    port: 8080,
    host: true,
  },
});
