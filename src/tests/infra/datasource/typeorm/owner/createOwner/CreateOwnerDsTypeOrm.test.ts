import { EntityManager } from "typeorm";

import { OwnerRepository } from "@/infra/datasource/typeorm/owner/OwnerRepositoryTypeOrm";

import {
    findOneByMock,
    ownerRepositoryMock,
    saveMock,
} from "@/tests/mocks/OwnerRepositoryTypeOrm.mock";

import { CreateOwnerDsTypeOrm } from "@/infra/datasource/typeorm/owner/createOwner";
import { CreateOwnerDsRequestModel } from "@/useCases/owner";

describe("CreateOwnerDsTypeOrm", () => {
    let createOwnerDsTypeOrm: CreateOwnerDsTypeOrm;

    beforeEach(() => {
        createOwnerDsTypeOrm = new CreateOwnerDsTypeOrm(
            new ownerRepositoryMock(
                jest.fn(),
                jest.fn() as unknown as EntityManager
            ) as OwnerRepository
        );
    });

    describe("existsByUsername", () => {
        it("should return true when user exists", async () => {
            findOneByMock.mockResolvedValue({
                id: "any_id",
                username: "any_name",
            });

            const result = await createOwnerDsTypeOrm.existsByUsername(
                "any_name"
            );

            expect(result).toBeTruthy();
        });

        it("should return false when user not exists", async () => {
            findOneByMock.mockResolvedValue(null);

            const result = await createOwnerDsTypeOrm.existsByUsername(
                "any_name"
            );

            expect(result).toBeFalsy();
        });
    });

    describe("save", () => {
        let requestModel: CreateOwnerDsRequestModel;

        beforeEach(() => {
            requestModel = {
                createdAt: new Date(),
                username: "any_name",
            };
        });

        it("should return response model", async () => {
            saveMock.mockResolvedValue({
                id: "any_id",
                username: "any_name",
            });

            const result = await createOwnerDsTypeOrm.save(requestModel);

            expect(result).toEqual({ id: "any_id", username: "any_name" });
        });
    });
});
