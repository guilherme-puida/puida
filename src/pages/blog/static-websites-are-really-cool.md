---
layout: ../../layouts/Post.astro
title: Static websites are really cool
description: How to take advantage of modern tools to make simple websites.
tags: [web]
date: 2022-10-07
pubDate: 2022-10-07
---

# Static websites are really cool

Everyone should be able to express their own ideas, and owning a blog/thoughts
dump is a great way to do that without relying on some big corporation like Facebook or Twitter.
I've wanted to build a blog for a long time now, and finally got around to it.
This post will outline the process of making a simple static website using modern tools.

## Static site generators

<abbr title="Static Site generators">SSGs</abbr> are tools that generate a full
static HTML website based on data and templates. It's a far easier and more
enjoyable experience than writing tons of pages by hand, and most tools have
support for markdown, so you can write posts very easily.

Some of the more popular SSGs are:

- Jekkyl
- Zola
- Hugo
- Pelican

If you are familiar with the templating style used in traditional monolithic webapps (Django, Rails and similar) they are a great option.

However, if you are more comfortable with React/Vue components, where you pass props up and
down to compose your pages, building templates this way can be confusing.
Another option is using frameworks that work with those libraries to produce static websites.
For React you have Next and Gatsby, and Vue there is Nuxt.
I considered going in this direction but didn't want to have huge Javascript bundles for a really simple website.

Fortunately, there is a new-ish tool that uses a similar architecture to React and produces completely static, no javascript required HTML.

## Astro

[Astro](https://astro.build) is a different SSG when compared to other tools.
It feels like using JSX to build static websites, which I find great.

Using it's island architecture, it's possible to hydrate javascript only when needed,
so most pages should load instantly.

The developer expericence is also great, since you can use any of the major reactive frameworks to develop interactive components.

This website is written with Astro and TailwindCSS, which can feel overwhelming at first but makes styling easier with consistent rules.

## Blogging

With the website (almost) complete, I can focus on the hardest part: writing.
I have an [RSS feed](/rss.xml) available, so you can keep track of my progress.