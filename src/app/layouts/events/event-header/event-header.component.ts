import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-header',
  templateUrl: './event-header.component.html',
  styleUrls: ['./event-header.component.scss']
})
export class EventHeaderComponent implements OnInit, OnDestroy {
  public seconds: number;
  public bookingOffset: any = null;
  public timer: any;

  constructor() {
    this.setTime();
  }

  ngOnInit() {
  }

  setTime() {
    this.timer = setInterval(function () {
      var countDown = new Date('dec 30, 2022 00:00:00').getTime();
      var now = new Date().getTime();
      var distance = countDown - now;
      this.document.getElementById('days').innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.document.getElementById('hours').innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.document.getElementById('minutes').innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.document.getElementById('seconds').innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
    }, this.seconds);
  }
  onRedirect(e) {
    e.preventDefault();
    let el = document.getElementById('register');
    el.scrollIntoView({behavior: 'smooth'});
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
