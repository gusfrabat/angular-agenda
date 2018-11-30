import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { LinksComponent } from './links/links.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [AboutComponent, LinksComponent, InfoComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
