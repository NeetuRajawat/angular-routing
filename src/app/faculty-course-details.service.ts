import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyCourseDetailsService {

  constructor() { }

  facultyDetails : any[] =[
    {
    "facultyId":101,
    "facultyName" : "Vivek",
    "facultyMobile": "9987665645",
    "facultyEmail" : "vivek@abc.com",
    "highestQualification":"Dr",
    "workLocation" : "Mysore"
  },
  {
    "facultyId":102,
    "facultyName" : "Vikas",
    "facultyMobile": "9987665645",
    "facultyEmail" : "vikas@abc.com",
    "highestQualification":"Dr",
    "workLocation" : "Mysore"
  },
  {
    "facultyId":103,
    "facultyName" : "Sheetal",
    "facultyMobile": "9987265645",
    "facultyEmail" : "sheetal@abc.com",
    "highestQualification":"ME",
    "workLocation" : "Bangalore"
  },
  {
    "facultyId":104,
    "facultyName" : "Prakash",
    "facultyMobile": "9987005645",
    "facultyEmail" : "Prakash@abc.com",
    "highestQualification":"ME",
    "workLocation" : "Mysore"
  },
  {
    "facultyId":105,
    "facultyName" : "Priyank",
    "facultyMobile": "9987665600",
    "facultyEmail" : "Priyank@abc.com",
    "highestQualification":"ME",
    "workLocation" : "Bangalore"
  },
  {
    "facultyId":106,
    "facultyName" : "Shammi",
    "facultyMobile": "9901665645",
    "facultyEmail" : "Shammi@abc.com",
    "highestQualification":"Dr",
    "workLocation" : "Hyderabad"
  },
  {
    "facultyId":107,
    "facultyName" : "Vipin",
    "facultyMobile": "9987665645",
    "facultyEmail" : "Vipin@abc.com",
    "highestQualification":"ME",
    "workLocation" : "Mysore"
  },
  {
    "facultyId":108,
    "facultyName" : "Reetu",
    "facultyMobile": "9987600045",
    "facultyEmail" : "Reetu@abc.com",
    "highestQualification":"Dr",
    "workLocation" : "Bangalore"
  }
]

courseDetails : any[] =[
  {
    "courseId" : "S01",
    "courseName" : "Java",
    "durationHours" : 48,
    "passScore" : 55,
    "instructorId" : 101
  },
  {
    "courseId" : "S02",
    "courseName" : "C",
    "durationHours" : 78,
    "passScore" : 50,
    "instructorId" : 103
  },
  {
    "courseId" : "S03",
    "courseName" : "C++",
    "durationHours" : 55,
    "passScore" : 90,
    "instructorId" : 102
  },
  {
    "courseId" : "S04",
    "courseName" : "Angular",
    "durationHours" : 45,
    "passScore" : 88,
    "instructorId" : 104
  },
  {
    "courseId" : "S05",
    "courseName" : "Python",
    "durationHours" : 48,
    "passScore" : 59,
    "instructorId" : 106
  },
  {
    "courseId" : "S06",
    "courseName" : "Azure",
    "durationHours" : 90,
    "passScore" : 78,
    "instructorId" : 105
  },
  {
    "courseId" : "S07",
    "courseName" : "DBMS",
    "durationHours" : 72,
    "passScore" : 89,
    "instructorId" : 107
  },
  {
    "courseId" : "S08",
    "courseName" : "Jquery",
    "durationHours" : 78,
    "passScore" : 90,
    "instructorId" : 108
  },
  {
    "courseId" : "S09",
    "courseName" : "HTML",
    "durationHours" : 55,
    "passScore" : 100,
    "instructorId" : 100
  },
  {
    "courseId" : "S10",
    "courseName" : "JS",
    "durationHours" : 44,
    "passScore" : 93,
    "instructorId" : 100
  }
]

notMatchFaculty : any[]=[];
matchedFaculty: any[]=[];

showAllFacultyList(){
   return this.facultyDetails;
}

showAllCourseDetails(){
  return this.courseDetails;
}

showMatchFacultyDetails(){
  this.matchedFaculty= this.facultyDetails.map(t1 => ({...t1, ...this.courseDetails.find(t2 => t2.instructorId == t1.facultyId)}))
  return this.matchedFaculty;
}

showNotMatchFacultyDetail(){
  this.notMatchFaculty = this.courseDetails.filter(o1 => !this.facultyDetails.some(o2 => o1.instructorId == o2.facultyId));
  return this.notMatchFaculty;
}

}
