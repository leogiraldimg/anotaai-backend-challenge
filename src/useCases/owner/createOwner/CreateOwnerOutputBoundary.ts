import {
    CreateOwnerInvalidUsernameException,
    CreateOwnerAlreadyExistsException,
} from "./exceptions";
import { CreateOwnerResponseModel } from "./CreateOwnerResponseModel";

interface CreateOwnerOutputBoundary {
    presentSuccess(
        responseModel: CreateOwnerResponseModel
    ): CreateOwnerResponseModel;

    presentCreateOwnerAlreadyExists(
        error: CreateOwnerAlreadyExistsException
    ): CreateOwnerResponseModel;

    presentCreateOwnerInvalidUsername(
        error: CreateOwnerInvalidUsernameException
    ): CreateOwnerResponseModel;
}

export { CreateOwnerOutputBoundary };
