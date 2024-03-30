import { ListByIdOwnerResponseModel } from "./ListByIdOwnerResponseModel";
import { ListByIdOwnerNotFoundException } from "./exception/ListByIdOwnerNotFoundException";

interface ListByIdOwnerOutputBoundary {
    presentListByIdOwnerNotFound(
        error: ListByIdOwnerNotFoundException
    ): ListByIdOwnerResponseModel;

    presentSuccess(
        responseModel: ListByIdOwnerResponseModel
    ): ListByIdOwnerResponseModel;
}

export { ListByIdOwnerOutputBoundary };
