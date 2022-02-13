import { connect, disconnect } from "../db.mjs";

import Page from "../models/page.mjs";
import User from "../models/user.mjs";

const POPULATE = ["author", { path: "parent", select: "title" }];
const OPTS = {
  UPDATE: {
    upsert: true, // add if not found
    new: true, // return the updated doc
  },
};

export async function updatePage(title, updates = {}) {
  await connect();
  const page = await Page.findOneAndUpdate(
    { title },
    updates,
    OPTS.UPDATE
  ).populate(POPULATE);
  await disconnect();
  return page;
}

export async function findPages(filter = {}) {
  await connect();
  let page = await Page.find(filter || {}).populate(POPULATE);
  await disconnect();
  if (!page) throw new Error(`No matching pages found.`);
  return page;
}

export default (app) => {
  app.get("/api/pages/:title?", async ({ query, params: { title } }, res) => {
    const filter = title ? { title, ...query } : query;
    try {
      const pages = await findPages(filter);
      return res.json(pages);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  });
  app.post("/api/pages/:title", async ({ query, params }, res) => {
    const { title } = params;
    try {
      const updated = await updatePage(title, query);
      return res.json(updated);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  });
  app.put("/api/pages/:title", async ({ query, params }, res) => {
    const { title } = params;
    try {
      const updated = await updatePage(title, query, true);
      return res.json(updated);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  });
};

// let res = {};
// res.p1 = await updatePage("Test Post 1", {});
// res.p2 = await updatePage("Test Post 2", {});
// res.p3 = await updatePage("Test Post 3", {});
// res = await findPages({ parent: { $exists: true } });

// console.log(res);
// console.log(JSON.parse(JSON.stringify(res)));
