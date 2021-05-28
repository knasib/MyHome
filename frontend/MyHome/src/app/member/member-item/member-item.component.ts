import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/shared/models/member.model';

@Component({
  selector: 'app-member-item',
  templateUrl: './member-item.component.html',
  styleUrls: ['./member-item.component.css']
})
export class MemberItemComponent implements OnInit {
  @Input() member: Member;
  @Input() id: number;

  constructor() { }

  ngOnInit(): void {
  }

}
