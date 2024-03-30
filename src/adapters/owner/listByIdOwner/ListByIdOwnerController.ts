import { ListByIdOwnerControllerInputBoundary } from "./ListByIdOwnerControllerInputBoundary";
import {
    ListByIdOwnerInputBoundary,
    ListByIdOwnerResponseModel,
} from "@/useCases/owner";

class ListByIdOwnerController implements ListByIdOwnerControllerInputBoundary {
    private inputBoundary: ListByIdOwnerInputBoundary;

    constructor(inputBoundary: ListByIdOwnerInputBoundary) {
        this.inputBoundary = inputBoundary;
    }

    async listById(id: string): Promise<ListByIdOwnerResponseModel> {
        return await this.inputBoundary.listById(id);
    }
}

export { ListByIdOwnerController };
