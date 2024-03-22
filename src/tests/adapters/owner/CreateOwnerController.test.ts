import { createOwnerInputBoundaryMock } from "@/tests/mocks/CreateOwnerInputBoundary.mock";

import { CreateOwnerController } from "@/adapters/owner";
import {
    CreateOwnerRequestModel,
    CreateOwnerResponseModel,
} from "@/useCases/owner";

describe("CreateOwnerController", () => {
    let createOwnerController: CreateOwnerController;

    beforeEach(() => {
        createOwnerController = new CreateOwnerController(
            createOwnerInputBoundaryMock
        );
    });

    describe("create", () => {
        it("should return response model", async () => {
            const requestModel = new CreateOwnerRequestModel({
                username: "username",
            });
            const responseModel = new CreateOwnerResponseModel({
                id: "1",
                username: "username",
            });
            createOwnerInputBoundaryMock.create.mockResolvedValue(
                responseModel
            );

            const result = await createOwnerController.create(requestModel);

            expect(result).toEqual(responseModel);
        });
    });
});
