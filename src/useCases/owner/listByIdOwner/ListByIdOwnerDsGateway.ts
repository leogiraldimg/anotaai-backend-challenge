import { ListByIdOwnerDsResponseModel } from "./ListByIdOwnerDsResponseModel";

interface ListByIdOwnerDsGateway {
    getById(id: string): Promise<ListByIdOwnerDsResponseModel | null>;
}

export { ListByIdOwnerDsGateway };
