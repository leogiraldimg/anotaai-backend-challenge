import { ListByIdOwnerResponseModel } from "./ListByIdOwnerResponseModel";

interface ListByIdOwnerInputBoundary {
    listById(id: string): Promise<ListByIdOwnerResponseModel>;
}

export { ListByIdOwnerInputBoundary };
