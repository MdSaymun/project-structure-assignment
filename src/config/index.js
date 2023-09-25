const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.join(process.cwd(), "config.env"),
});

module.exports = {
  port: process.env.RUNNING_PORT || 5000,
  database_url: process.env.DATABASE_URL,
  env: process.env.NODE_ENV,
};
