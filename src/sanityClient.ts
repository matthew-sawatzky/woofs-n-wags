// src/sanityClient.ts
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "rfvwsm62", // from sanity.json or sanity.io manage
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});
