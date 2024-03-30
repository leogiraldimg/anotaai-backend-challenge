import { listByIdOwnerDsGatewayMock } from "../../mocks/ListByIdOwnerDsGateway.mock";
import { listByIdOwnerOutputBoundary } from "../../mocks/ListByIdOwnerOutputBoundary.mock";

import {
    ListByIdOwnerDsResponseModel,
    ListByIdOwnerInteractor,
    ListByIdOwnerResponseModel,
} from "@/useCases/owner/listByIdOwner";

describe("ListByIdOwnerInteractor", () => {
    let interactor: ListByIdOwnerInteractor;

    let responseModel: ListByIdOwnerResponseModel;
    let dsResponseModel: ListByIdOwnerDsResponseModel;

    beforeEach(() => {
        jest.clearAllMocks();

        interactor = new ListByIdOwnerInteractor(
            listByIdOwnerDsGatewayMock,
            listByIdOwnerOutputBoundary
        );
        responseModel = new ListByIdOwnerResponseModel({
            id: "1",
            username: "username",
        });
        dsResponseModel = new ListByIdOwnerDsResponseModel({
            id: "1",
            username: "username",
        });
    });

    describe("listById", () => {
        beforeEach(() => {
            listByIdOwnerDsGatewayMock.getById.mockResolvedValue(
                dsResponseModel
            );

            listByIdOwnerOutputBoundary.presentListByIdOwnerNotFound.mockImplementation(
                () => {
                    throw new Error("Not found error");
                }
            );
            listByIdOwnerOutputBoundary.presentSuccess.mockResolvedValue(
                responseModel
            );
        });

        it("should return success", async () => {
            const result = await interactor.listById("1");

            expect(result).toEqual(responseModel);
        });

        it("should return not found error when owner with given id does not exist", async () => {
            listByIdOwnerDsGatewayMock.getById.mockResolvedValue(null);

            await expect(interactor.listById("1")).rejects.toThrow(
                new Error("Not found error")
            );
        });
    });
});
