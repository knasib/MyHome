import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as membersActions from '../member/store/members.actions';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>) { 

  }

  ngOnInit(): void {
    //TODO: Once signup flow completed, remove this the familyid from localStorage
    localStorage.setItem("familyName", "Dhanraj");
    this.store.dispatch(new membersActions.GetMembers());
  }

  navigateAddMember() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
