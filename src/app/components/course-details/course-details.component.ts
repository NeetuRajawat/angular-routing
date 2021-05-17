import { Component, OnInit } from '@angular/core';
import { FacultyCourseDetailsService } from 'src/app/faculty-course-details.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private service : FacultyCourseDetailsService) { }
  details : any[]=[];
  
  ngOnInit(): void {
    this.details =this.service.showAllCourseDetails();
  }


}
