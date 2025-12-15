// Angular Import
import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // public props
  cardTitle = input<string>();
  cardClass = input<string>();
  blockClass = input<string>();
  customHeader = input<boolean>(false);
  headerClass = input<string>();
  customDate = input<boolean>(false);
  isCardFooter = input<boolean>(false);
  hidHeader = input<boolean>(false);
  CardDate = input<string>();
  footerClass = input<string>();
}
