// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { NavSearchComponent } from './nav-search/nav-search.component';

@Component({
  selector: 'app-nav-left',
  imports: [SharedModule, NavSearchComponent],
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent {}
