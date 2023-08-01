import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export default class BadgeComponent {}
