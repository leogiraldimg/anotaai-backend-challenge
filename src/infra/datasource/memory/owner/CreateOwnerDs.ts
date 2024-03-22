import { v4 as uuidv4 } from "uuid";

import {
    CreateOwnerDsGateway,
    CreateOwnerDsRequestModel,
    CreateOwnerDsResponseModel,
} from "@/useCases/owner";

class CreateOwnerDs implements CreateOwnerDsGateway {
    owners: { id: string; username: string }[] = [];

    save(
        requestModel: CreateOwnerDsRequestModel
    ): Promise<CreateOwnerDsResponseModel> {
        const owner = { id: uuidv4(), username: requestModel.username };
        this.owners.push(owner);
        return Promise.resolve(owner);
    }

    existsByUsername(username: string): Promise<boolean> {
        return Promise.resolve(
            this.owners.some((owner) => owner.username === username)
        );
    }
}

export { CreateOwnerDs };
