import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ChartService } from '../shared/services/chat.service';

import * as fromApp from '../store/app.reducer';
import { User } from '../shared/models/user.model';
import { ChatMessage, MsgType } from '../shared/models/chat.message.model';

import { environment } from '../../environments/environment';
import { CompatClient } from '@stomp/stompjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  subcription: Subscription;
  chatForm: FormGroup;
  loginUser: User;
  chatBook: ChatMessage[] = [];
  private unsubscribeSubject: Subject<void> = new Subject<void>();

  constructor(private chatService: ChartService,
    private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.subcription = this.store.select("login").subscribe((state) => {
      this.loginUser = state.user;
    });

    this.chatService.onChatMessage(`${environment.chat.topic}`+this.loginUser.familyName)
        .pipe(takeUntil(this.unsubscribeSubject))
        .subscribe(chat => {
          this.chatBook.push(chat);
        });
  
    this.initForm();
  }

  initForm() {
    this.chatForm = new FormGroup({
      chatmessage: new FormControl(null, Validators.required),
    });
  }

  sendMessage() {
    if(this.loginUser != null) {
      const chatMessage = new ChatMessage(this.loginUser.userId, 
        this.chatForm.value['chatmessage'], 
        MsgType.CHAT);
      this.chatService.send(`${environment.chat.sendTo}`+this.loginUser.familyName, chatMessage);
      this.initForm();
    }
  }

  ngOnDestroy(): void {
  }
}
