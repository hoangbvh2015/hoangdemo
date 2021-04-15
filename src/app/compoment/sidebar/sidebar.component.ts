import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationList } from 'src/app/navigation/navigation';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public navigion = NavigationList
  constructor( private elementRef :ElementRef) { }

  ngOnInit() {
  }
  showChildren(id){
    let menu_active = $(`a#item${id}`);
      if(!menu_active.hasClass('active1')){
        menu_active.addClass('active1').next().slideDown()
      }else{
        menu_active.removeClass('active1').next().slideUp()
      }
    }
    changeBg(id){
      let menu_active = $(`ul li a`);
      let menu_chose = $(`a#item${id}`);
      menu_active.removeClass('active');
      if(!menu_chose.hasClass('active')){
        menu_chose.addClass('active')
      }else{
        menu_chose.addClass('active')
      }
    }

}
