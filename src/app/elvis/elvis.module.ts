import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElvisRoutingModule } from './elvis-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkComponent } from './pages/work/work.component';
import { BlogComponent } from './pages/blog/blog.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    PortafolioComponent,
    AboutComponent,
    WorkComponent,
    BlogComponent,
  ],
  imports: [
    CommonModule,
    ElvisRoutingModule    
  ]
})
export class ElvisModule { }
