import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  goToLink(url: string){
    window.open(url, "_blank");
  }

  ngOnInit(): void {
  }

}
