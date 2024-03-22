import { Owner } from "@/entities/owner";
import { CreateOwnerDsGateway } from "./CreateOwnerDsGateway";
import { CreateOwnerInputBoundary } from "./CreateOwnerInputBoundary";
import { CreateOwnerOutputBoundary } from "./CreateOwnerOutputBoundary";
import { CreateOwnerRequestModel } from "./CreateOwnerRequestModel";
import { CreateOwnerResponseModel } from "./CreateOwnerResponseModel";
import { CreateOwnerDsRequestModel } from "./CreateOwnerDsRequestModel";
import {
    CreateOwnerInvalidUsernameException,
    CreateOwnerAlreadyExistsException,
} from "./exceptions";

class CreateOwnerInteractor implements CreateOwnerInputBoundary {
    private dsGateway: CreateOwnerDsGateway;
    private outputBoundary: CreateOwnerOutputBoundary;

    constructor(
        dsGateway: CreateOwnerDsGateway,
        outputBoundary: CreateOwnerOutputBoundary
    ) {
        this.dsGateway = dsGateway;
        this.outputBoundary = outputBoundary;
    }

    async create(
        requestModel: CreateOwnerRequestModel
    ): Promise<CreateOwnerResponseModel> {
        if (await this.dsGateway.existsByUsername(requestModel.username)) {
            return this.outputBoundary.presentCreateOwnerAlreadyExists(
                new CreateOwnerAlreadyExistsException(
                    `Owner with username ${requestModel.username} already exists`
                )
            );
        }

        const owner = new Owner(requestModel);

        if (!owner.usernameIsValid()) {
            return this.outputBoundary.presentCreateOwnerInvalidUsername(
                new CreateOwnerInvalidUsernameException(
                    `Owner username ${requestModel.username} is invalid`
                )
            );
        }

        const savedOwner = await this.dsGateway.save(
            new CreateOwnerDsRequestModel(owner)
        );

        return this.outputBoundary.presentSuccess(
            new CreateOwnerResponseModel(savedOwner)
        );
    }
}

export { CreateOwnerInteractor };
