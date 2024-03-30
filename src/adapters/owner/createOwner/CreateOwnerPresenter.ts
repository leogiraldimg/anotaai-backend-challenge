import {
    CreateOwnerInvalidUsernameException,
    CreateOwnerAlreadyExistsException,
    CreateOwnerOutputBoundary,
    CreateOwnerResponseModel,
} from "@/useCases/owner";
import {
    InvalidAttributeException,
    ResourceConflictException,
} from "../../exceptions";

class CreateOwnerPresenter implements CreateOwnerOutputBoundary {
    presentSuccess(
        responseModel: CreateOwnerResponseModel
    ): CreateOwnerResponseModel {
        return responseModel;
    }

    presentCreateOwnerInvalidUsername(
        error: CreateOwnerInvalidUsernameException
    ): CreateOwnerResponseModel {
        throw new InvalidAttributeException(error.message);
    }

    presentCreateOwnerAlreadyExists(
        error: CreateOwnerAlreadyExistsException
    ): CreateOwnerResponseModel {
        throw new ResourceConflictException(error.message);
    }
}

export { CreateOwnerPresenter };
