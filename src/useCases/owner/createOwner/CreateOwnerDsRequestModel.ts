class CreateOwnerDsRequestModel {
    username: string;

    constructor(params: { username: string }) {
        this.username = params.username;
    }
}

export { CreateOwnerDsRequestModel };
