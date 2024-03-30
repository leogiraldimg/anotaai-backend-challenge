import { ResourceNotFoundException } from "@/adapters/exceptions";
import {
    ListByIdOwnerNotFoundException,
    ListByIdOwnerOutputBoundary,
    ListByIdOwnerResponseModel,
} from "@/useCases/owner";

class ListByIdOwnerPresenter implements ListByIdOwnerOutputBoundary {
    presentSuccess(
        responseModel: ListByIdOwnerResponseModel
    ): ListByIdOwnerResponseModel {
        return responseModel;
    }

    presentListByIdOwnerNotFound(
        error: ListByIdOwnerNotFoundException
    ): ListByIdOwnerResponseModel {
        throw new ResourceNotFoundException(error.message);
    }
}

export { ListByIdOwnerPresenter };
