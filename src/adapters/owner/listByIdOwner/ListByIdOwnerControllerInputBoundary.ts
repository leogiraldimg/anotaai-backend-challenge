import { ListByIdOwnerResponseModel } from "@/useCases/owner";

interface ListByIdOwnerControllerInputBoundary {
    listById(id: string): Promise<ListByIdOwnerResponseModel>;
}

export { ListByIdOwnerControllerInputBoundary };
