import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RutasRoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RutasRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    HttpClientModule,
    ComponentsModule
  ],exports: [
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
