class CreateOwnerDsRequestModel {
    username: string;
    createdAt: Date;

    constructor(params: { username: string; createdAt?: Date }) {
        this.username = params.username;
        this.createdAt = params.createdAt || new Date();
    }
}

export { CreateOwnerDsRequestModel };
