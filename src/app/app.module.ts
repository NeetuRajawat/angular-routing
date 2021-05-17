import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultyDetailsComponent } from './components/faculty-details/faculty-details.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CommonFacultyComponent } from './components/common-faculty/common-faculty.component';
import { NoFacultyDetailsComponent } from './components/no-faculty-details/no-faculty-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    FacultyDetailsComponent,
    CourseDetailsComponent,
    CommonFacultyComponent,
    NoFacultyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
