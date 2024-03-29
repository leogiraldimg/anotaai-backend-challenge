import {
    CreateOwnerDsGateway,
    CreateOwnerDsRequestModel,
    CreateOwnerDsResponseModel,
} from "@/useCases/owner";
import { OwnerRepository } from "./OwnerRepositoryTypeOrm";
import { OwnerDataMapperTypeOrm } from "./OwnerDataMapperTypeOrm";

class CreateOwnerDsTypeOrm implements CreateOwnerDsGateway {
    repository: OwnerRepository;

    constructor(repository: OwnerRepository) {
        this.repository = repository;
    }

    async existsByUsername(username: string): Promise<boolean> {
        const owner = await this.repository.findOneBy({ username });
        return !!owner;
    }

    async save(
        requestModel: CreateOwnerDsRequestModel
    ): Promise<CreateOwnerDsResponseModel> {
        let entity = new OwnerDataMapperTypeOrm(requestModel);
        entity = await this.repository.save(entity);
        return new CreateOwnerDsResponseModel(entity);
    }
}

export { CreateOwnerDsTypeOrm };
