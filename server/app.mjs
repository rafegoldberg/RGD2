import cors from "cors";
import express from "express";
import config from "config";

import registerAPI from "./api/users.mjs";

const app = express();

if (config.cors?.enabled) app.use(cors(config.cors.options));

registerAPI(app);

app.use("*", (req, res) => res.status(400).json({ error: "Route Not Found" }));

export default app;
