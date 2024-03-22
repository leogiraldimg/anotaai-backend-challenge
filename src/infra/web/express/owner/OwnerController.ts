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
            const result = await this.registerController.create(req.body);
            res.status(201).json(result);
        } catch (error) {
            if (error instanceof ResourceConflictException) {
                res.status(409).json({
                    error: "Resource conflict",
                    message: error.message,
                });
            } else if (error instanceof InvalidAttributeException) {
                res.status(400).json({
                    error: "Invalid attribute",
                    message: error.message,
                });
            } else {
                res.status(500).json({
                    error: "Internal server error",
                    message: error.message ? error.message : "Unexpected error",
                });
            }
        }
    }
}

export { OwnerController };
