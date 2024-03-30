import { OwnerRepository } from "@/infra/datasource/typeorm/owner/OwnerRepositoryTypeOrm";

const findOneByMock = jest.fn();
const saveMock = jest.fn();

jest.mock("@/infra/datasource/typeorm/owner/OwnerRepositoryTypeOrm", () => ({
    OwnerRepository: jest.fn().mockImplementation(() => ({
        findOneBy: findOneByMock,
        save: saveMock,
    })),
}));

const ownerRepositoryMock = OwnerRepository as jest.MockedClass<
    typeof OwnerRepository
>;

export { findOneByMock, saveMock, ownerRepositoryMock };
