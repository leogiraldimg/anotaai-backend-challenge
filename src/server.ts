import "reflect-metadata";
import express from "express";
import bodyParser from "body-parser";

import { OwnerController } from "@/infra/web/express";
import {
    CreateOwnerController,
    CreateOwnerPresenter,
    ListByIdOwnerController,
    ListByIdOwnerPresenter,
} from "@/adapters/owner";
import {
    CreateOwnerInteractor,
    ListByIdOwnerInteractor,
} from "@/useCases/owner";
import {
    CreateOwnerDsTypeOrm,
    ListByIdOwnerDsTypeOrm,
    OwnerDataMapperTypeOrm,
    OwnerRepository,
} from "@/infra/datasource/typeorm/owner";
import { datasourceTypeOrm } from "@/infra/datasource/typeorm";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

datasourceTypeOrm
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
        process.exit(1);
    });

const ownerController = new OwnerController(
    new CreateOwnerController(
        new CreateOwnerInteractor(
            new CreateOwnerDsTypeOrm(
                new OwnerRepository(
                    OwnerDataMapperTypeOrm,
                    datasourceTypeOrm.createEntityManager()
                )
            ),
            new CreateOwnerPresenter()
        )
    ),
    new ListByIdOwnerController(
        new ListByIdOwnerInteractor(
            new ListByIdOwnerDsTypeOrm(
                new OwnerRepository(
                    OwnerDataMapperTypeOrm,
                    datasourceTypeOrm.createEntityManager()
                )
            ),
            new ListByIdOwnerPresenter()
        )
    )
);
app.route("/owners").post(ownerController.create.bind(ownerController));
app.route("/owners/:id").get(ownerController.listById.bind(ownerController));

if (process.env.NODE_ENV !== "test") {
    app.listen(3000);
    console.log("App listening in port 3000");
}

export { app };
