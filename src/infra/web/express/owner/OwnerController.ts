import { Request, Response } from "express";

import { CreateOwnerControllerInputBoundary } from "@/adapters/owner";
import {
    InvalidAttributeException,
    ResourceConflictException,
} from "@/adapters/exceptions";

class OwnerController {
    private registerController: CreateOwnerControllerInputBoundary;

    constructor(registerController: CreateOwnerControllerInputBoundary) {
        this.registerController = registerController;
    }

    async create(req: Request, res: Response) {
        try {
            const owner = await this.registerController.create(req.body);
            res.status(201).json(owner);
        } catch (err) {
            const { message, statusCode, name } = this.formatError(err);
            res.status(statusCode).json({ error: name, message });
        }
    }

    private formatError(error: Error): {
        name: string;
        statusCode: number;
        message: string;
    } {
        if (error instanceof ResourceConflictException) {
            return {
                name: "Resource conflict",
                statusCode: 409,
                message: error.message,
            };
        }
        if (error instanceof InvalidAttributeException) {
            return {
                name: "Invalid attribute",
                statusCode: 400,
                message: error.message,
            };
        }
        return {
            name: "Internal server error",
            statusCode: 500,
            message: error.message || "Unexpected error",
        };
    }
}

export { OwnerController };
