// Angular Import
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

// project import
import { NavigationItem } from '../../navigation';
import { NavItemComponent } from '../nav-item/nav-item.component';

@Component({
  selector: 'app-nav-collapse',
  imports: [NavItemComponent, RouterModule],
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.scss']
})
export class NavCollapseComponent {
  // public props
  @Input() item!: NavigationItem;

  // public method
  navCollapse(e: MouseEvent) {
    let parent = e.target as HTMLElement;
    parent = (parent as HTMLElement).parentElement as HTMLElement;

    const sections = document.querySelectorAll('.pcoded-hasmenu');
    for (let i = 0; i < sections.length; i++) {
      if (sections[i] !== parent) {
        sections[i].classList.remove('pcoded-trigger');
      }
    }
    let firstParent = parent.parentElement;
    let preParent = ((parent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
    if (firstParent?.classList.contains('pcoded-hasmenu')) {
      do {
        firstParent?.classList.add('pcoded-trigger');
        firstParent = ((firstParent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      } while (firstParent.classList.contains('pcoded-hasmenu'));
    } else if (preParent.classList.contains('pcoded-submenu')) {
      do {
        preParent?.parentElement?.classList.add('pcoded-trigger');
        preParent = (((preParent as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
      } while (preParent.classList.contains('pcoded-submenu'));
    }
    parent.classList.toggle('pcoded-trigger');
  }
}
