import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/Operators';
import { Member } from 'src/app/shared/models/member.model';
import { MemberService } from 'src/app/shared/services/member.service';

import * as fromApp from '../../store/app.reducer';
import * as MembersActions from '../store/members.actions';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member: Member;
  id: number;

  constructor(/*private memberService: MemberService,*/
              private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    /*this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.member = this.memberService.getMember(this.id);
    });*/

    //ngrx way of doing
    this.route.params
      .pipe(map(params => {
            return +params['id'];
          }), 
          switchMap(id => {
            this.id = id;
            return this.store.select("members");
          }),
          map(membersState => {
            return this.member = membersState.members.find((member, _) => {
              return this.id === member.id;
            });
          })
      )
      .subscribe(member => {
        this.member = member;
      });

  }

  deleteMember(): void {
    //this.memberService.deleteMember(this.id);
    this.store.dispatch(new MembersActions.DeleteMember(this.id));
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  editMember() : void {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
}
