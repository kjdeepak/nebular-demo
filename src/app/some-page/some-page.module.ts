import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomePageRoutingModule } from './some-page-routing.module';
import { NbLayoutModule, NbSidebarModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { SomePageComponent } from './some-page/some-page.component';


@NgModule({
  declarations: [SomePageComponent],
  imports: [
    CommonModule,
    SomePageRoutingModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbIconModule
  ]
})
export class SomePageModule { }
