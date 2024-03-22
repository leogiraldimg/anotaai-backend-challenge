import { CreateOwnerDsRequestModel } from "./CreateOwnerDsRequestModel";
import { CreateOwnerDsResponseModel } from "./CreateOwnerDsResponseModel";

interface CreateOwnerDsGateway {
    save(
        requestModel: CreateOwnerDsRequestModel
    ): Promise<CreateOwnerDsResponseModel>;

    existsByUsername(username: string): Promise<boolean>;
}

export { CreateOwnerDsGateway };
