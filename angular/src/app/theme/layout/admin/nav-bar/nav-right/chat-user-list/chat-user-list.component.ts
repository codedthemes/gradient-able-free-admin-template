// Angular Import
import { Component, EventEmitter, NgIterable, Output } from '@angular/core';

// project import
import { FriendsList } from 'src/app/fack-db/friends-list';

@Component({
  selector: 'app-chat-user-list',
  templateUrl: './chat-user-list.component.html',
  styleUrls: ['./chat-user-list.component.scss']
})
export class ChatUserListComponent {
  // public props
  @Output() ChatCollapse = new EventEmitter();
  @Output() ChatToggle = new EventEmitter();
  searchFriends!: string;
  // eslint-disable-next-line
  friendsList: any = FriendsList.friends;

  // public method
  ChatOn() {
    this.ChatToggle.emit();
  }
}
