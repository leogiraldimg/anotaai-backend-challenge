import { config } from "dotenv";
import { z } from "zod";
import { DataSource } from "typeorm";

if (process.env.NODE_ENV === "development") {
    config();
}

const datasourceTypeOrm = new DataSource({
    type: z
        .enum(["mysql", "postgres", "mongodb"])
        .parse(process.env.DATABASE_TYPE),
    host: z.string().parse(process.env.DATABASE_HOST),
    port: z.number().parse(parseInt(process.env.DATABASE_PORT)),
    username: z.string().parse(process.env.DATABASE_USERNAME),
    password: z.string().parse(process.env.DATABASE_PASSWORD),
    database: z.string().parse(process.env.DATABASE_NAME),
    synchronize: process.env.NODE_ENV === "test" ? true : false,
    entities: [`${__dirname}/*/*DataMapperTypeOrm{.js,.ts}`],
    migrations: [`${__dirname}/migrations/*{.js,.ts}`],
});

export { datasourceTypeOrm };
