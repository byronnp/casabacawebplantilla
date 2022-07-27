import { Component, OnInit } from '@angular/core';
import { blogMasonaryDB } from '../../../shared/data/blog/blog-masonary/fullwidth-3';

@Component({
  selector: 'app-fullwidth-four-column',
  templateUrl: './fullwidth-four-column.component.html',
  styleUrls: ['./fullwidth-four-column.component.scss']
})
export class FullwidthFourColumnComponent implements OnInit {
  public blogData: any
  
  constructor() {
    setTimeout(()=> {
      this.blogData = blogMasonaryDB.masonary;
      })
   }

  ngOnInit() {
  }

}
