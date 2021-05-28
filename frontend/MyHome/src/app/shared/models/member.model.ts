export class Member {
    public age: number;
    constructor(public id: number,
                public name: string,
                public gender: string, 
                public photoUri: string,
                public adharNumber: string,
                public panNumber: string,
                public mobileNumber: string,
                public dob: Date,
                public emailId: string) {
            
        let timeDiff = Math.abs(Date.now() - dob.getTime());
        this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
}