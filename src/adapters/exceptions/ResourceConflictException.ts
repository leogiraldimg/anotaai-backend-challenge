class ResourceConflictException extends Error {
    constructor(message: string) {
        super(message);
    }
}

export { ResourceConflictException };
