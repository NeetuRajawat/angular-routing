import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonFacultyComponent } from './components/common-faculty/common-faculty.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { FacultyDetailsComponent } from './components/faculty-details/faculty-details.component';
import { NoFacultyDetailsComponent } from './components/no-faculty-details/no-faculty-details.component';


const routes: Routes = [
  { path: 'facultyDetails', component: FacultyDetailsComponent },
  { path: 'courseDetails', component:  CourseDetailsComponent},
  { path: 'commonFaculty', component: CommonFacultyComponent },
  { path: 'notMatchedFaculty', component: NoFacultyDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
