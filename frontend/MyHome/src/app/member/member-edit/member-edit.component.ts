import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/Operators';

import { MemberService } from 'src/app/shared/services/member.service';

import * as fromApp from '../../store/app.reducer';
import * as membersActions from '../store/members.actions';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  id: number;
  editMode: boolean;
  memberForm: FormGroup;
  subscription: Subscription;

  constructor(/*private memberService: MemberService,*/
              private route: ActivatedRoute,
              private router: Router,
              public datepipe: DatePipe,
              public store: Store<fromApp.AppState>) { 
              
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    })
  }

  initForm() {
    let name = '', gender = '', photoUri = '', adharNumber = '';
    let panNumber = '', mobileNumber = '', emailId = '';
    let dob = new Date();

    if(this.editMode) {
      //const member = this.memberService.getMember(this.id);
      this.subscription = this.store.select("members")
        .pipe(
          map(memberState => {
            return memberState.members.find((member, index) => {
              return member.id === this.id; 
            });
          })
        ).subscribe((member) => {
          name = member.name;
          gender = member.gender;
          photoUri = member.photoUri;
          adharNumber = member.adharNumber;
          panNumber = member.panNumber;
          mobileNumber = member.mobileNumber;
          emailId = member.emailId;
          dob = member.dob;
        });
    }

    this.memberForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'gender': new FormControl(gender, Validators.required), 
      'photoUri': new FormControl(photoUri, Validators.required),
      'adharNumber': new FormControl(adharNumber, Validators.required),
      'panNumber': new FormControl(panNumber, Validators.required),
      'mobileNumber': new FormControl(mobileNumber, Validators.required),
      'dob':new FormControl(formatDate(dob, "yyyy-MM-dd", 'en'), Validators.required),
      'emailId': new FormControl(emailId, [Validators.required, Validators.email]),
    });
  }

  submit() {
    let timeDiff = Math.abs(Date.now() - new Date(this.memberForm.value['dob']).getTime());
    this.memberForm.value['age'] = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    this.memberForm.value['id'] = this.id;
    
    if(this.editMode) {
      //this.memberService.updateMemeber(this.id, this.memberForm.value);
      this.store.dispatch(new membersActions.UpdateMember({id: this.id, newMember: this.memberForm.value}));
    } else {
      //this.memberService.addMember(this.memberForm.value);
      this.store.dispatch(new membersActions.AddMember(this.memberForm.value));
    }
    this.router.navigate(['../'], {relativeTo: this.route})
  }

  cancel() {
    this.router.navigate(['../'], {relativeTo: this.route})
  }
}
