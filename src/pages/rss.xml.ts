import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "puida.xyz",
    description: "Development and other random topics",
    site: import.meta.env.SITE,
    items: import.meta.glob("./blog/*.md"),
    customData: "<language>en-us</language>",
    stylesheet: "/rss/styles.xsl",
  });
