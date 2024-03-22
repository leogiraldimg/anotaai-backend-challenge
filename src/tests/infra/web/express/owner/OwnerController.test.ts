import { getMockReq, getMockRes } from "@jest-mock/express";

import { createOwnerControllerInputBoundaryMock } from "../../../../mocks/CreateOwnerControllerInputBoundary.mock";

import { OwnerController } from "@/infra/web/express";
import {
    InvalidAttributeException,
    ResourceConflictException,
} from "@/adapters/exceptions";

describe("OwnerController", () => {
    let controller: OwnerController;

    beforeEach(() => {
        jest.clearAllMocks();

        controller = new OwnerController(
            createOwnerControllerInputBoundaryMock
        );
    });

    describe("create", () => {
        it("should return 201 when owner is created", async () => {
            const req = getMockReq({
                body: {
                    name: "John",
                    email: "qR8iQ@example.com",
                },
            });
            const { res } = getMockRes();
            createOwnerControllerInputBoundaryMock.create.mockResolvedValueOnce(
                {
                    name: "John",
                    email: "qR8iQ@example.com",
                }
            );

            await controller.create(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({
                name: "John",
                email: "qR8iQ@example.com",
            });
        });

        it("should return 409 when owner already exists", async () => {
            const req = getMockReq({
                body: {
                    name: "John",
                    email: "qR8iQ@example.com",
                },
            });
            const { res } = getMockRes();
            createOwnerControllerInputBoundaryMock.create.mockRejectedValueOnce(
                new ResourceConflictException("Resource conflict")
            );

            await controller.create(req, res);

            expect(res.status).toHaveBeenCalledWith(409);
            expect(res.json).toHaveBeenCalledWith({
                error: "Resource conflict",
                message: "Resource conflict",
            });
        });

        it("should return 400 when invalid attributes are provided", async () => {
            const req = getMockReq({
                body: {
                    name: "John",
                },
            });
            const { res } = getMockRes();
            createOwnerControllerInputBoundaryMock.create.mockRejectedValueOnce(
                new InvalidAttributeException("Invalid attribute")
            );

            await controller.create(req, res);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({
                error: "Invalid attribute",
                message: "Invalid attribute",
            });
        });
    });
});
