// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export default class BadgeComponent {}
