// Angular Import
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// project import
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CardComponent } from './components/card/card.component';

// third party
import { NgScrollbarModule } from 'ngx-scrollbar';
import 'hammerjs';
import 'mousetrap';

// bootstrap import
import { NgbDropdownModule, NgbNavModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardComponent,
    BreadcrumbComponent,
    NgbDropdownModule,
    NgbNavModule,
    NgbModule,
    NgScrollbarModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardComponent,
    BreadcrumbComponent,
    NgbModule,
    NgbDropdownModule,
    NgbNavModule,
    NgScrollbarModule
  ],
  declarations: []
})
export class SharedModule {}
