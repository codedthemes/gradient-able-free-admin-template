// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// bootstrap import
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// third party import
import { ColorPickerModule } from 'ngx-color-picker';

@Component({
  selector: 'app-form-elements',
  standalone: true,
  imports: [SharedModule, NgbDropdownModule, ColorPickerModule],
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export default class FormElementsComponent {}
