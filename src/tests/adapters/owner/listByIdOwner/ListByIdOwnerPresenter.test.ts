import { ResourceNotFoundException } from "@/adapters/exceptions";
import { ListByIdOwnerPresenter } from "@/adapters/owner";
import { ListByIdOwnerNotFoundException } from "@/useCases/owner";

describe("ListByIdOwnerPresenter", () => {
    let listByIdOwnerPresenter: ListByIdOwnerPresenter;

    beforeEach(() => {
        listByIdOwnerPresenter = new ListByIdOwnerPresenter();
    });

    describe("presentSuccess", () => {
        it("should return response model", () => {
            const responseModel = {
                id: "1",
                username: "username",
            };

            const result = listByIdOwnerPresenter.presentSuccess(responseModel);

            expect(result).toEqual(responseModel);
        });
    });

    describe("presentListByIdOwnerNotFound", () => {
        it("should throw ResourceNotFoundException", () => {
            const error = new ListByIdOwnerNotFoundException(
                "ListByIdOwnerNotFound"
            );
            expect(() => {
                listByIdOwnerPresenter.presentListByIdOwnerNotFound(error);
            }).toThrow(new ResourceNotFoundException(error.message));
        });
    });
});
