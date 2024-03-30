import {
    ListByIdOwnerDsGateway,
    ListByIdOwnerDsResponseModel,
} from "@/useCases/owner";
import { OwnerRepository } from "../OwnerRepositoryTypeOrm";

class ListByIdOwnerDsTypeOrm implements ListByIdOwnerDsGateway {
    repository: OwnerRepository;

    constructor(repository: OwnerRepository) {
        this.repository = repository;
    }

    async getById(id: string): Promise<ListByIdOwnerDsResponseModel | null> {
        return await this.repository.findOneBy({ id });
    }
}

export { ListByIdOwnerDsTypeOrm };
