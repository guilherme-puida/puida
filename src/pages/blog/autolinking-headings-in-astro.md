---
layout: ../../layouts/Post.astro
title: Autolinking headings in Astro posts
description: Using rehype plugins to our advantage
tags: [web, astro]
date: 2022-10-17
pubDate: 2022-10-17
---

# Autolinking headings in Astro posts

As explained in [my previous post](./static-websites-are-really-cool), this
website is build with [Astro](https://astro.build/).

I wanted to make all post headings contain an `href` to itself, so you can click
it and then share a link to a specific portion of the post.  When opening the
generated `html` for my posts, I could see that every heading already contained
an `id` attribute based on the content.

Browsing around Astro's documentation, I found the section about [markdown plugins](https://docs.astro.build/en/guides/markdown-content/#markdown-plugins) 
and a plugin that did exactly what I needed:
[`rehype-autolink-headings`](https://github.com/rehypejs/rehype-autolink-headings).

Since the headings already had `id`s, adding the plugin should be enough, so I tried to add the following lines
to my `astro.config.mjs` configuration file:

```ts
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default defineConfig({
    markdown: {
        extendDefaultPlugins: true,
        rehypePlugins: [rehypeAutolinkHeadings],
    },
});
```

_This is not the entire file, contents are omitted for brevity's sake._

Unfortunately, this did not work. Apparently, the default plugins are applied last, and `rehype-autolink-headings` was running with headings with no `id`.

The solution is to apply another plugin, [`rehype-slug`](https://github.com/rehypejs/rehype-slug) before autolinking.

```ts
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

export default defineConfig({
    markdown: {
        extendDefaultPlugins: true,
        rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    },
});
```

Now headings were generated with a `<a aria-hidden="true" href="..."></a>` in the `::before` of headings. I wanted to wrap the entire heading with the link, so changing the default configuration of the plugin was needed.

```ts
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

export default defineConfig({
    markdown: {
        extendDefaultPlugins: true,
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
    },
});
```

Astro's documentation is weirdly lacking on some aspects, such as how to pass options to plugins and the order of execution, so I wrote this to help anyone trying to solve the same problem :^)