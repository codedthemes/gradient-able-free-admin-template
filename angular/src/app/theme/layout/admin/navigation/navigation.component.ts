// Angular Import
import { Component, output } from '@angular/core';

// project import
import { NavContentComponent } from './nav-content/nav-content.component';

@Component({
  selector: 'app-navigation',
  imports: [NavContentComponent],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  // public props
  windowWidth: number;
  NavMobCollapse = output();

  // constructor
  constructor() {
    this.windowWidth = window.innerWidth;
  }

  // public method
  navMobCollapse() {
    if (this.windowWidth < 992) {
      this.NavMobCollapse.emit();
    }
  }
}
