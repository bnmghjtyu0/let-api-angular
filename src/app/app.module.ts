import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlMessageComponent } from './components/control-message/control-message.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './ui/home/home.component';
import { HomeFormComponent } from './components/home-form/home-form.component';
import { GlobalValidationService } from './services/validations/global-validation.service';

@NgModule({
  declarations: [
    AppComponent,
    ControlMessageComponent,
    HomeComponent,
    HomeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [GlobalValidationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
