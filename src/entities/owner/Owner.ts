class Owner {
    username: string;

    constructor(params: { username: string }) {
        this.username = params.username;
    }

    usernameIsValid(): boolean {
        return this.username.length > 0;
    }
}

export { Owner };
