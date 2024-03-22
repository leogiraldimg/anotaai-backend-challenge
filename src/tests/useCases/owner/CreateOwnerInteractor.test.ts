import { createOwnerDsGatewayMock } from "@/tests/mocks/CreateOwnerDsGateway.mock";
import { createOwnerOutputBoundaryMock } from "@/tests/mocks/CreateOwnerOutputBoundary.mock";

import {
    CreateOwnerDsResponseModel,
    CreateOwnerInteractor,
    CreateOwnerRequestModel,
    CreateOwnerResponseModel,
} from "@/useCases/owner";

describe("CreateOwnerInteractor", () => {
    let interactor: CreateOwnerInteractor;

    let requestModel: CreateOwnerRequestModel;
    let responseModel: CreateOwnerResponseModel;
    let dsResponseModel: CreateOwnerDsResponseModel;

    beforeEach(() => {
        jest.clearAllMocks();

        interactor = new CreateOwnerInteractor(
            createOwnerDsGatewayMock,
            createOwnerOutputBoundaryMock
        );

        requestModel = new CreateOwnerRequestModel({ username: "username" });
        responseModel = new CreateOwnerResponseModel({
            id: "1",
            username: "username",
        });
        dsResponseModel = new CreateOwnerDsResponseModel({
            id: "1",
            username: "username",
        });
    });

    describe("create", () => {
        beforeEach(() => {
            createOwnerDsGatewayMock.existsByUsername.mockResolvedValue(false);
            createOwnerDsGatewayMock.save.mockResolvedValue(dsResponseModel);

            createOwnerOutputBoundaryMock.presentSuccess.mockReturnValue(
                responseModel
            );
            createOwnerOutputBoundaryMock.presentCreateOwnerAlreadyExists.mockImplementation(
                () => {
                    throw new Error("Not found error");
                }
            );
            createOwnerOutputBoundaryMock.presentCreateOwnerInvalidUsername.mockImplementation(
                () => {
                    throw new Error("Invalid username error");
                }
            );
        });

        it("should return success", async () => {
            const result = await interactor.create(requestModel);

            expect(result).toEqual(responseModel);
        });

        it("should return not found error when owner with given username already exists", async () => {
            createOwnerDsGatewayMock.existsByUsername.mockResolvedValue(true);

            await expect(interactor.create(requestModel)).rejects.toThrow(
                new Error("Not found error")
            );
        });

        it("should return invalid username error when owner username is invalid", async () => {
            requestModel.username = "";

            await expect(interactor.create(requestModel)).rejects.toThrow(
                new Error("Invalid username error")
            );
        });
    });
});
