import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'badges',
        loadComponent: () => import('./badge/badge.component')
      },
      {
        path: 'button',
        loadComponent: () => import('./button/button.component')
      },
      {
        path: 'breadcrumb-paging',
        loadComponent: () => import('./breadcrumb/breadcrumb.component')
      },
      {
        path: 'collapse',
        loadComponent: () => import('./collapse/collapse.component')
      },
      {
        path: 'tabs-pills',
        loadComponent: () => import('./tabs-pills/tabs-pills.component')
      },
      {
        path: 'typography',
        loadComponent: () => import('./typography/typography.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule {}
