import { XstroServer } from "./release/index.mjs";

async function main() {
    const config = {
        PORT: 3000,
        DATABASE_URL: "database.db"
    };

    const server = new XstroServer(config);
    await server.start();
}

main()