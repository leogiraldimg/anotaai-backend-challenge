import { CreateOwnerControllerInputBoundary } from "./CreateOwnerControllerInputBoundary";
import {
    CreateOwnerInputBoundary,
    CreateOwnerRequestModel,
    CreateOwnerResponseModel,
} from "@/useCases/owner";

class CreateOwnerController implements CreateOwnerControllerInputBoundary {
    private inputBoundary: CreateOwnerInputBoundary;

    constructor(inputBoundary: CreateOwnerInputBoundary) {
        this.inputBoundary = inputBoundary;
    }

    async create(
        requestModel: CreateOwnerRequestModel
    ): Promise<CreateOwnerResponseModel> {
        return await this.inputBoundary.create(requestModel);
    }
}

export { CreateOwnerController };
