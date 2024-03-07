import { type Config } from "drizzle-kit";
import { env } from "~/env";
// import { cwd } from "node:process";
// import { loadEnvConfig } from "@next/env";

// loadEnvConfig(cwd());

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["booking-session_*"],
} satisfies Config;
