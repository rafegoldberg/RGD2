import Page, { ChildPage } from "../models/page.mjs";

const POPULATE = ["author", { path: "parent", select: "title" }];
const OPTIONS = {
  findOneAndUpdate: {
    upsert: true, // add if not found
    new: true, // return the updated doc
  },
};

export async function updatePage(title, updates = {}) {
  const PageModel = updates.parent ? ChildPage : Page;
  const page = await PageModel.findOneAndUpdate(
    { title },
    updates,
    OPTIONS.findOneAndUpdate
  ).populate(POPULATE);
  return page;
}

export async function findPages(filter = {}) {
  let page = await Page.find(filter || {}).populate(POPULATE);
  if (!page) throw new Error(`No matching pages found.`);
  return page;
}

export default (app) => {
  app.get("/api/pages/:title?", async ({ query, params: { title } }, res) => {
    const filter = title ? { title, ...query } : query;
    try {
      const pages = await findPages(filter);
      if (!pages.length)
        return res.status(400).json({
          message: `We lost the thread somewhere. 🧵 Sorry about that.`,
          title: `Oy vey!`,
        });
      return res.json(pages);
    } catch (e) {
      console.error(e);
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
    let { title } = params;
    try {
      const updated = await updatePage(title, query, true);
      return res.json(updated);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  });
};
