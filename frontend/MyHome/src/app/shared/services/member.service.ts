import { formatDate } from '@angular/common';
import { Subject } from 'rxjs';

import { Member } from "../models/member.model";

export class MemberService {
    changedMembers = new Subject<Member[]>();

    private memebers : Member[] = [
        new Member(1, 
                    'Nasib Kumar Sahu', 
                    'M', 
                    '../../../assets/images/nasib.jpg',
                    '9483 2320 3303',
                    'CWDPS6024D',
                    '9962769221',
                    new Date("06-29-1988"),
                    'er.nasib@gmail.com'),
        new Member(2, 
                    'Sahana D',
                    'F', 
                    '../../../assets/images/sahana.jpg',
                    '5483 2320 5302',
                    'RJDXS9802E',
                    '7681093822',
                    new Date('09-11-1993'),
                    'chakkuvs@gmail.com')
    ];

    public getMembers() {
        return this.memebers.slice();
    }

    public getMember(index: number) {
        return this.memebers[index];
    }

    public deleteMember(index: number) {
        this.memebers.splice(index, 1);
        this.changedMembers.next(this.memebers.slice());
    }

    public updateMemeber(index: number, updatedMember: Member): void {
        //updatedMember.age = this.calculateAge(updatedMember.dob);
        this.memebers[index] = updatedMember;
        this.changedMembers.next(this.memebers.slice());
    }

    public addMember(member: Member): void {
        //member.age = this.calculateAge(member.dob);
        this.memebers.push(member);
        this.changedMembers.next(this.memebers.slice());
    }

    public calculateAge(dob: Date): number {
        let dobStr = formatDate(dob, 'yyyy-MM-dd','en');
        dob = new Date(Date.parse(dobStr));
        let timeDiff = Math.abs(Date.now() - dob.getTime());
        return Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
}