export class User {
    constructor(
        public familyName: string,
        public userId: string,
        public loginAt: Date,
        public expiryAt: Date,
        public token?: string
    ){}
}
