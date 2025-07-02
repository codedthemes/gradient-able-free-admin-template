// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-collapse',
  imports: [SharedModule],
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent {
  // Public props
  isCollapsed = true;
  isMultiCollapsed1 = true;
  isMultiCollapsed2 = true;

  items = ['First', 'Second', 'Third'];
}
