export class User {
    name
    address
    phones

    constructor(name: string, address: string, phones: number[]) {
        this.name = name
        this.address = address
        this.phones = phones
    }
}