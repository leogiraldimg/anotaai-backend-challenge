import { CreateOwnerRequestModel } from "./CreateOwnerRequestModel";
import { CreateOwnerResponseModel } from "./CreateOwnerResponseModel";

interface CreateOwnerInputBoundary {
    create(
        requestModel: CreateOwnerRequestModel
    ): Promise<CreateOwnerResponseModel>;
}

export { CreateOwnerInputBoundary };
