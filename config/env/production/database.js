// path: ./config/env/production/database.ts

import { parse } from "pg-connection-string";
const config = parse(process.env.DATABASE_URL);

export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi"),
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
