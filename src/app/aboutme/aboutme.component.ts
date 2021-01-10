import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  degrees = [
    {
      heading: "Schooling",
      school: "Siddhartha School of Excellence",
      degree: "High School",
      field: "School Education",
      gpa: "9.0"
    },
    {
      heading: "Diploma",
      school: "T. R. R College of Engineering",
      degree: "Polytechnic",
      field: "Computer Engineering",
      gpa: "9.8"
    },
    {
      heading: "Bacholers",
      school: "JNTUH College of Engineering Hyderabad",
      degree: "B.Tech",
      field: "Computer Science and Engineering",
      gpa: "8.49"
    }
  ];


}
