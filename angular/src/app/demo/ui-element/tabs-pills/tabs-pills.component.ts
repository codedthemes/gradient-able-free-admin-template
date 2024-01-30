// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-tabs-pills',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './tabs-pills.component.html',
  styleUrls: ['./tabs-pills.component.scss']
})
export default class TabsPillsComponent {}
