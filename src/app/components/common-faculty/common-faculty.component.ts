import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import {MatTableDataSource} from '@angular/material/table';
import { FacultyCourseDetailsService } from 'src/app/faculty-course-details.service';
@Component({
  selector: 'app-common-faculty',
  templateUrl: './common-faculty.component.html',
  styleUrls: ['./common-faculty.component.css']
})
export class CommonFacultyComponent implements OnInit {

  constructor(private service : FacultyCourseDetailsService) { }
  details : any[]=[];
  ngOnInit(): void {
    this.details = this.service.showMatchFacultyDetails();
  }



}
