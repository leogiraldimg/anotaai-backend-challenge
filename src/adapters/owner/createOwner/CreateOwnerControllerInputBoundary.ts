import {
    CreateOwnerRequestModel,
    CreateOwnerResponseModel,
} from "@/useCases/owner";

interface CreateOwnerControllerInputBoundary {
    create(
        requestModel: CreateOwnerRequestModel
    ): Promise<CreateOwnerResponseModel>;
}

export { CreateOwnerControllerInputBoundary };
