import { Repository } from "typeorm";

import { OwnerDataMapperTypeOrm } from "./OwnerDataMapperTypeOrm";

class OwnerRepository extends Repository<OwnerDataMapperTypeOrm> {}

export { OwnerRepository };
