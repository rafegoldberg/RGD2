import User from "../models/user.mjs";

export async function updateUser(username, updates = {}, upsert) {
  if (!username) throw new Error("Username is required.");
  const user = await User.findOneAndUpdate({ username }, updates, {
    upsert, // add if not found
    new: true, // return the updated doc
  });
  return user;
}

export async function findUsers(filter = {}) {
  let users = await User.find(filter || {});
  if (!users) throw new Error(`Nothing found for '${username}'.`);
  return users;
}

export default (app) => {
  app.get(
    "/api/users/:username?",
    async ({ query, params: { username } }, res) => {
      const filter = username ? { username, ...query } : query;
      try {
        const users = await findUsers(filter);
        return res.json(users);
      } catch (e) {
        return res.status(400).json({ error: e.message });
      }
    }
  );
  app.post("/api/users/:username", async ({ query, params }, res) => {
    const { username } = params;
    try {
      const updated = await updateUser(username, query);
      return res.json(updated);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  });
  app.put("/api/users/:username", async ({ query, params }, res) => {
    const { username } = params;
    try {
      const updated = await updateUser(username, query, true);
      return res.json(updated);
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  });
};
