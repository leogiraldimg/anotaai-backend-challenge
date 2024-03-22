import { Owner } from "@/entities/owner";

describe("Owner", () => {
    describe("nameIsValid", () => {
        it("should return true when name is valid", () => {
            const owner = new Owner({ username: "username" });

            expect(owner.usernameIsValid()).toBe(true);
        });

        it("should return false when name is empty", () => {
            const owner = new Owner({ username: "" });

            expect(owner.usernameIsValid()).toBe(false);
        });
    });
});
