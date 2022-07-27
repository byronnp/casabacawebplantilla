import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ColorScssService } from '../../shared/service/color-scss.service';

@Component({
  selector: 'app-portfolio-metro',
  templateUrl: './portfolio-metro.component.html',
  styleUrls: ['./portfolio-metro.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class PortfolioMetroComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private title: Title, public colorPicker: ColorScssService, ) { }

  ngOnInit() {
    this.colorPicker.setColorScheme('inner-page');
    this.title.setTitle(this.route.snapshot.data['title']);
  }

}
