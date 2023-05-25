import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    NgxPaginationModule
  ],exports: [
    HomeComponent
  ]
})
export class ComponentsModule { }
