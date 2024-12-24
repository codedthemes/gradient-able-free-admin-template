// angular import
import { Component, ElementRef, OnInit, output, viewChild, input } from '@angular/core';

// project import
import { FriendsList } from 'src/app/fack-db/friends-list';
import { UserChat } from 'src/app/fack-db/user-chat';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-chat-msg',
  imports: [SharedModule],
  templateUrl: './chat-msg.component.html',
  styleUrls: ['./chat-msg.component.scss']
})
export class ChatMsgComponent implements OnInit {
  friendId = input.required<number>();
  ChatToggle = output();
  newChat = viewChild.required('newChat', { read: ElementRef });
  friendsList = FriendsList.friends;
  userChat = UserChat.chat;
  // eslint-disable-next-line
  chatMessage: any;
  message!: string;
  message_error!: boolean;
  friendWriting!: boolean;
  newReplay: string;
  direction = 'ltr';

  // constructor
  constructor() {
    this.newReplay = '';
  }

  // private method
  private isRtlMode(isRtl: boolean) {
    this.direction = isRtl === true ? 'rtl' : 'ltr';
  }

  ngOnInit() {
    this.chatMessage = findObjectByKeyValue(this.friendsList, 'id', this.friendId());
    if (this.chatMessage) {
      const message = findObjectByKeyValue(this.userChat, 'friend_id', this.friendId());
      if (message) {
        this.chatMessage['chat'] = message['messages'];
      }
    }
  }

  sentMsg(flag: number) {
    if (this.message === '' || this.message === undefined) {
      this.message_error = true;
    } else {
      if (flag === 1) {
        this.message_error = false;
      } else {
        this.message_error = false;
        const temp_replay = this.message;
        const html_send =
          '<div class="media chat-messages">' +
          '<div class="media-body chat-menu-reply">' +
          '<div >' +
          '<p class="chat-cont">' +
          this.message +
          '</p>' +
          '</div>' +
          '<p class="chat-time">now</p>' +
          '</div>' +
          '</div>';

        this.newReplay = this.newReplay + html_send;
        this.message = '';
        this.friendWriting = true;
        setTimeout(() => {
          this.friendWriting = false;
          const html_replay =
            '<div class="media chat-messages">' +
            '<a class="media-left photo-table" href="javascript:">' +
            '<img class="media-object img-radius img-radius m-t-5" src="' +
            this.chatMessage.photo +
            '" alt="' +
            this.chatMessage.name +
            '">' +
            '</a>' +
            '<div class="media-body chat-menu-content">' +
            '<div >' +
            '<p class="chat-cont">hello superior personality you write</p>' +
            '<p class="chat-cont">' +
            temp_replay +
            '</p>' +
            '</div>' +
            '<p class="chat-time">now</p>' +
            '</div>' +
            '</div>';
          this.newReplay = this.newReplay + html_replay;
        }, 3000);
      }
    }
  }
}

function findObjectByKeyValue<T>(array: T[], key: keyof T, value: T[keyof T]) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return array[i];
    }
  }
  return false;
}
