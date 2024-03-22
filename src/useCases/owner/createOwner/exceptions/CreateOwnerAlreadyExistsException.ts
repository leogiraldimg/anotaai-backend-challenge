class CreateOwnerAlreadyExistsException extends Error {
    constructor(message: string) {
        super(message);
    }
}

export { CreateOwnerAlreadyExistsException };
