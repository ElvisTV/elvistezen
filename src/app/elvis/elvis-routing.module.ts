import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkComponent } from './pages/work/work.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'work',
        component: WorkComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: '**',
        redirectTo: 'portafolio'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElvisRoutingModule { }
