// Angular Import
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, ViewEncapsulation, inject, input } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { DOCUMENT } from '@angular/common';

// project import
import { Spinkit } from './spinkits';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss', './spinkit-css/sk-line-material.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent implements OnDestroy {
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);
  private document = inject<Document>(DOCUMENT);

  // public props
  isSpinnerVisible = true;
  Spinkit = Spinkit;
  backgroundColor = input('#2689E2');
  spinner = input(Spinkit.skLine);

  // constructor
  constructor() {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          this.isSpinnerVisible = true;
          this.cdr.markForCheck();
        } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
          this.isSpinnerVisible = false;
          this.cdr.markForCheck();
        }
      },
      () => {
        this.isSpinnerVisible = false;
        this.cdr.markForCheck();
      }
    );
  }

  // life cycle event
  ngOnDestroy(): void {
    this.isSpinnerVisible = false;
  }
}
