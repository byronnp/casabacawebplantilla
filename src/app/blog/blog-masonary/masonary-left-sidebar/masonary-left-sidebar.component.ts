import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { blogMasonaryDB } from '../../../shared/data/blog/blog-masonary/masonary';

@Component({
  selector: 'app-masonary-left-sidebar',
  templateUrl: './masonary-left-sidebar.component.html',
  styleUrls: ['./masonary-left-sidebar.component.scss']
})
export class MasonaryLeftSidebarComponent implements OnInit {
  public blogData: any
  
 
  constructor() {
    setTimeout(()=> {
      this.blogData = blogMasonaryDB.masonary;
      })
   }

  ngOnInit() {
  }

  public myOptions: NgxMasonryOptions = {
    originTop: true
  };

}
