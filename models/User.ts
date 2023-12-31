export class User {
    id: number;
    username: string;
    password: string;
    roleid: number;

    constructor(id: number, username: string, password: string, roleid: number) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.roleid = roleid;
    }
}