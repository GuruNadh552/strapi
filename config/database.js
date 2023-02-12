module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "sql673.main-hosting.eu"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "u730133489_simplified_nin"),
      user: env("DATABASE_USERNAME", "u730133489_ninja"),
      password: env("DATABASE_PASSWORD", "~y7gFgtgV1K"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
