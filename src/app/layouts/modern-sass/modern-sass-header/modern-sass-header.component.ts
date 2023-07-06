import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-sass-header',
  templateUrl: './modern-sass-header.component.html',
  styleUrls: ['./modern-sass-header.component.scss']
})
export class ModernSassHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  onRedirect(e) {
    e.preventDefault();
    let el = document.getElementById('feaure');
    el.scrollIntoView({behavior: 'smooth'});
  }
}
