import { RTableDemoRadioComponent } from './components/r-table/demo/r-table-demo-radio.componnet';
import { RTableDemoBaseComponent } from './components/r-table/demo/r-table-demo-base.componnet';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-modules';
import { HttpClientModule } from '@angular/common/http';
import { RTableComponent } from './components/r-table/r-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RTableComponent,
    RTableDemoBaseComponent,
    RTableDemoRadioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
