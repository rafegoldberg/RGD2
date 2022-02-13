import cors from "cors";
import express from "express";
import config from "config";

import registerUsersAPI from "./api/users.mjs";
import registerPagesAPI from "./api/pages.mjs";

const app = express();

if (config.cors?.enabled) app.use(cors(config.cors.options));

registerUsersAPI(app);
registerPagesAPI(app);

const statics = express.static("public");
app.use(statics);
app.use("*", statics);

app.use("*", (req, res) => res.status(400).json({ error: "Route Not Found" }));

export default app;
