class ListByIdOwnerNotFoundException extends Error {
    constructor(message: string) {
        super(message);
    }
}

export { ListByIdOwnerNotFoundException };
