// Angular Import
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface friendsList {
  id: number;
  photo: string;
  name: string;
  new: number;
  status: number;
  time: string;
}

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent {
  @Input() friends!: friendsList;
  @Output() ChatOn = new EventEmitter();

  public innerChatToggle(friends: friendsList) {
    this.ChatOn.emit(friends.id);
  }
}
