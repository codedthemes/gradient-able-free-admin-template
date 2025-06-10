import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'badges',
        loadComponent: () => import('./badge/badge.component').then((c) => c.BadgeComponent)
      },
      {
        path: 'button',
        loadComponent: () => import('./button/button.component').then((c) => c.ButtonComponent)
      },
      {
        path: 'breadcrumb-paging',
        loadComponent: () => import('./breadcrumb/breadcrumb.component').then((c) => c.BreadcrumbComponent)
      },
      {
        path: 'collapse',
        loadComponent: () => import('./collapse/collapse.component').then((c) => c.CollapseComponent)
      },
      {
        path: 'tabs-pills',
        loadComponent: () => import('./tabs-pills/tabs-pills.component').then((c) => c.TabsPillsComponent)
      },
      {
        path: 'typography',
        loadComponent: () => import('./typography/typography.component').then((c) => c.TypographyComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule {}
