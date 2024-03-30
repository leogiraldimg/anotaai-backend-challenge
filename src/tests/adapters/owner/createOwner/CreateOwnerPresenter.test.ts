import { InvalidAttributeException } from "@/adapters/exceptions";
import { CreateOwnerPresenter } from "@/adapters/owner";
import {
    CreateOwnerInvalidUsernameException,
    CreateOwnerResponseModel,
} from "@/useCases/owner";

describe("CreateOwnerPresenter", () => {
    let createOwnerPresenter: CreateOwnerPresenter;

    beforeEach(() => {
        jest.clearAllMocks();

        createOwnerPresenter = new CreateOwnerPresenter();
    });

    describe("presentSuccess", () => {
        it("should return response model", () => {
            const responseModel = new CreateOwnerResponseModel({
                id: "1",
                username: "username",
            });

            const result = createOwnerPresenter.presentSuccess(responseModel);

            expect(result).toEqual(responseModel);
        });
    });

    describe("presentCreateOwnerInvalidUsername", () => {
        it("should throw InvalidAttributeException", () => {
            const error = new CreateOwnerInvalidUsernameException(
                "Invalid username"
            );
            expect(() => {
                createOwnerPresenter.presentCreateOwnerInvalidUsername(error);
            }).toThrow(new InvalidAttributeException(error.message));
        });
    });

    describe("presentCreateOwnerAlreadyExists", () => {
        it("should throw ResourceConflictException", () => {
            const error = new CreateOwnerInvalidUsernameException(
                "Invalid username"
            );
            expect(() => {
                createOwnerPresenter.presentCreateOwnerAlreadyExists(error);
            }).toThrow(new InvalidAttributeException(error.message));
        });
    });
});
