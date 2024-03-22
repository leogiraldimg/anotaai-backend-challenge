import express from "express";
import bodyParser from "body-parser";

import { OwnerController } from "@/infra/web/express";
import { CreateOwnerController } from "@/adapters/owner";
import { CreateOwnerInteractor } from "@/useCases/owner";
import { CreateOwnerDs } from "@/infra/datasource/memory";
import { CreateOwnerPresenter } from "./adapters/owner/CreateOwnerPresenter";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const ownerController = new OwnerController(
    new CreateOwnerController(
        new CreateOwnerInteractor(
            new CreateOwnerDs(),
            new CreateOwnerPresenter()
        )
    )
);
app.route("/owners").post(ownerController.create.bind(ownerController));

if (process.env.NODE_ENV !== "test") {
    app.listen(3000);
    console.log("App listening in port 3000");
}

export { app };
