import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.scss']
})
export class InternComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  company = {
    title: "Axiom IO",
    bold_desc: "Axiom IO is an Advanced Consulting Partner with AWS & a Diamond Validated Partner with CITRIX.",
    desc: "Axiom IO gives you the opportunity to maximize business outcomes, through strategic planning, cross-functional insight and the experience to implement high-level cloud solutions."
  }

  experience = {
    title: "Axiom IO",
    role: "Summer Intern",
    description: "Developed rich user-interfaces using Angular and learned industry standards, handling problems in Computer Science, with hands-on experience by contributing my learning’s to the Organization. Worked on Angular, C# with Azure as a cloud service.",
    timePeriod: "April 2020 - June 2020"
  }
}
