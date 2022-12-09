import contentful, { Entry } from "contentful";
import type { Document } from "@contentful/rich-text-types";

export interface Region {
  title: string;
  slug: string;
}

export interface Post {
  title: string;
  body: Document;
  region: Entry<Region>;
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
