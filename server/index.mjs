// require('dotenv').config();

import config from "config";
import app from "./app.mjs";

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});
