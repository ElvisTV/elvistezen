import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'elvis',
    loadChildren: () => import('./elvis/elvis.module').then( m => m.ElvisModule ),
  },
  {
    path: '**',
    redirectTo: 'elvis'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
