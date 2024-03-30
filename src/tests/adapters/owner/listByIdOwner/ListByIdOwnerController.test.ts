import { listByIdOwnerInputBoundaryMock } from "@/tests/mocks/ListByIdOwnerInputBoundary.mock";

import { ListByIdOwnerController } from "@/adapters/owner";
import { ListByIdOwnerResponseModel } from "@/useCases/owner";

describe("ListByIdOwnerController", () => {
    let listByIdOwnerController: ListByIdOwnerController;

    beforeEach(() => {
        listByIdOwnerController = new ListByIdOwnerController(
            listByIdOwnerInputBoundaryMock
        );
    });

    describe("listById", () => {
        it("should return response model", async () => {
            const responseModel = new ListByIdOwnerResponseModel({
                id: "1",
                username: "username",
            });
            listByIdOwnerInputBoundaryMock.listById.mockResolvedValue(
                responseModel
            );

            const result = await listByIdOwnerController.listById("1");

            expect(result).toEqual(responseModel);
        });
    });
});
