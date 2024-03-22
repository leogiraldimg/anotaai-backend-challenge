class CreateOwnerDsResponseModel {
    id: string;
    username: string;

    constructor(params: { id: string; username: string }) {
        this.id = params.id;
        this.username = params.username;
    }
}

export { CreateOwnerDsResponseModel };
