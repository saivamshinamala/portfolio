import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects1 = [
    {
      title : "NotesSavingApp",
      desc: "Simple notes saving app where users need to authorize themselves for accessing the notes and creating new once.",
      imgSrc: "../../assets/Images/notessavingapp.png",
      link: "https://saivamshinamala.github.io/mean-frontend/login"
    },
    {
      title : "ICCII",
      desc: "Website for a conference held in our college.",
      imgSrc: "../../assets/Images/iccii.png",
      link: "http://www.iccii.net/"
    },
    {
      title : "Pig Game",
      desc: "A simple two-player dice game where a player wins if he scores the first 100.",
      imgSrc: "../../assets/Images/piggame.png",
      link: "https://saivamshinamala.github.io/pig-game/"
    }
  ];
  projects2 = [
    {
      title : "Data Encryption",
      desc: "An application that demonstrates the working of Encryption Algorithms like Caesar Cipher, Monoalphabetic, etc.",
      imgSrc: "../../assets/Images/dataencryption.png"
    }
  ];

}
