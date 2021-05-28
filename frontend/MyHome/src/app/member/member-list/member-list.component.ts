import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/Operators';

import { Member } from 'src/app/shared/models/member.model';
import { MemberService } from 'src/app/shared/services/member.service';

import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit, OnDestroy {
  members : Member[];
  subscription: Subscription;

  constructor(/*private memberService: MemberService,*/
      private store: Store<fromApp.AppState>) { 

   }

  ngOnInit(): void {
    /*this.subscription = this.memberService.changedMembers.subscribe((members: Member[]) => {
      this.members = members;
    });
    this.members = this.memberService.getMembers();*/
    this.subscription = this.store.select("members")
        .pipe(map(membersState => membersState.members))
        .subscribe((members) => {
          this.members = members;
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
