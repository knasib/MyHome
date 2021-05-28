export class User {
    constructor(
        public familyName: String,
        public userId:String,
        public loginAt: Date,
        public expiryAt: Date
    ){}
}