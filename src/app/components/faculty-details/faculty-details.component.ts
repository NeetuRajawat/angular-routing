import { Component, OnInit } from '@angular/core';
import { FacultyCourseDetailsService } from 'src/app/faculty-course-details.service';

@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrls: ['./faculty-details.component.css']
})
export class FacultyDetailsComponent implements OnInit {

  constructor(private service : FacultyCourseDetailsService) { }
  details : any[]=[];
  
  ngOnInit(): void {
    this.details =this.service.showAllFacultyList();
  }

}
