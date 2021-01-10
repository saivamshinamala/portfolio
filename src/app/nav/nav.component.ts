import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nav_links_class = "nav_links";

  burgerClicked() {
    if(window.innerWidth >= 720) {
      if(this.nav_links_class == "nav_links") {
        this.nav_links_class = "nav_links nav_links_slide";
      } else {
        this.nav_links_class = "nav_links"
      }
    }
    else {
      if(this.nav_links_class == "nav_links") {
        this.nav_links_class = "nav_links nav_links_active";
      } else {
        this.nav_links_class = "nav_links"
      }
    }
  }

  toHome() {
    this.burgerClicked();
    document.getElementById("home")?.scrollIntoView({behavior: "smooth"});
  }
  toAboutMe() {
    this.burgerClicked();
    document.getElementById("aboutme")?.scrollIntoView({behavior: "smooth"});
  }
  toIntern() {
    this.burgerClicked();
    document.getElementById("intern")?.scrollIntoView({behavior: "smooth"});
  }
  toProjects() {
    this.burgerClicked();
    document.getElementById("projects")?.scrollIntoView({behavior: "smooth"});
  }
  toResume() {
    this.burgerClicked();
    document.getElementById("resume")?.scrollIntoView({behavior: "smooth"});
  }
}
