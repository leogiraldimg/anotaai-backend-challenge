import { OwnerRepository } from "@/infra/datasource/typeorm/owner/OwnerRepositoryTypeOrm";

const findOneByMock = jest.fn();

jest.mock("@/infra/datasource/typeorm/owner/OwnerRepositoryTypeOrm", () => ({
    OwnerRepository: jest.fn().mockImplementation(() => ({
        findOneBy: findOneByMock,
    })),
}));

const ownerRepositoryMock = OwnerRepository as jest.MockedClass<
    typeof OwnerRepository
>;

export { findOneByMock, ownerRepositoryMock };
