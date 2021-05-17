import { Component, OnInit } from '@angular/core';
import { FacultyCourseDetailsService } from 'src/app/faculty-course-details.service';

@Component({
  selector: 'app-no-faculty-details',
  templateUrl: './no-faculty-details.component.html',
  styleUrls: ['./no-faculty-details.component.css']
})
export class NoFacultyDetailsComponent implements OnInit {
  constructor(private service : FacultyCourseDetailsService) { }
  details : any[]=[];
  ngOnInit(): void {
    this.details=this.service.showNotMatchFacultyDetail();
  }
 
}
