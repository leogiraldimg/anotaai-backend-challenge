import { EntityManager } from "typeorm";

import { OwnerRepository } from "@/infra/datasource/typeorm/owner/OwnerRepositoryTypeOrm";

import {
    findOneByMock,
    ownerRepositoryMock,
} from "@/tests/mocks/OwnerRepositoryTypeOrm.mock";

import { ListByIdOwnerDsTypeOrm } from "@/infra/datasource/typeorm/owner/listByIdOwner";
import { ListByIdOwnerDsResponseModel } from "@/useCases/owner";

describe("ListByIdOwnerDsTypeOrm", () => {
    let listByIdOwnerDsTypeOrm: ListByIdOwnerDsTypeOrm;

    beforeEach(() => {
        listByIdOwnerDsTypeOrm = new ListByIdOwnerDsTypeOrm(
            new ownerRepositoryMock(
                jest.fn(),
                jest.fn() as unknown as EntityManager
            ) as OwnerRepository
        );
    });

    describe("getById", () => {
        let listByIdOwnerDsResponseModel: ListByIdOwnerDsResponseModel;

        beforeEach(() => {
            listByIdOwnerDsResponseModel = {
                id: "any_id",
                username: "any_name",
            };
        });

        it("should return response model", async () => {
            findOneByMock.mockResolvedValueOnce(listByIdOwnerDsResponseModel);

            const result = await listByIdOwnerDsTypeOrm.getById("any_id");

            expect(result).toEqual(listByIdOwnerDsResponseModel);
        });
    });
});
