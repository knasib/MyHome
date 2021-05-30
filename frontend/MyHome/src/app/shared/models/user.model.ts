export class User {
    constructor(
        public familyName: string,
        public userId:String,
        public loginAt: Date,
        public expiryAt: Date
    ){}
}