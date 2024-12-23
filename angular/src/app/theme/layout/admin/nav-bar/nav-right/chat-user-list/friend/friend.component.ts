// angular import
import { Component, output, input } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

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
  imports: [SharedModule],
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent {
  readonly friends = input.required<friendsList>();
  ChatOn = output<number>();

  public innerChatToggle(friends: friendsList) {
    this.ChatOn.emit(friends.id);
  }
}
