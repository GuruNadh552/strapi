require("dotenv").config();
module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", process.env.JWT_TOKEN),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
});
