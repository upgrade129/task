import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import {  MatRadioModule } from '@angular/material/radio'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material//icon'
import { MatInputModule } from '@angular/material/input'
import {MatCardModule} from '@angular/material/card';



const Styles = [MatButtonModule,MatCardModule,MatInputModule,MatIconModule,MatFormFieldModule,MatRadioModule,MatCheckboxModule]
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Styles
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
