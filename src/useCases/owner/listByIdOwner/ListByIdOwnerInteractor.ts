import { ListByIdOwnerDsGateway } from "./ListByIdOwnerDsGateway";
import { ListByIdOwnerInputBoundary } from "./ListByIdOwnerInputBoundary";
import { ListByIdOwnerOutputBoundary } from "./ListByIdOwnerOutputBoundary";
import { ListByIdOwnerResponseModel } from "./ListByIdOwnerResponseModel";
import { ListByIdOwnerNotFoundException } from "./exception/ListByIdOwnerNotFoundException";

class ListByIdOwnerInteractor implements ListByIdOwnerInputBoundary {
    private dsGateway: ListByIdOwnerDsGateway;
    private outputBoundary: ListByIdOwnerOutputBoundary;

    constructor(
        dsGateway: ListByIdOwnerDsGateway,
        outputBoundary: ListByIdOwnerOutputBoundary
    ) {
        this.dsGateway = dsGateway;
        this.outputBoundary = outputBoundary;
    }

    async listById(id: string): Promise<ListByIdOwnerResponseModel> {
        const owner = await this.dsGateway.getById(id);

        if (!owner) {
            return this.outputBoundary.presentListByIdOwnerNotFound(
                new ListByIdOwnerNotFoundException(
                    `Owner with id ${id} not found`
                )
            );
        }

        return this.outputBoundary.presentSuccess(
            new ListByIdOwnerResponseModel(owner)
        );
    }
}

export { ListByIdOwnerInteractor };
