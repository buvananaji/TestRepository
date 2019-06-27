import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  warnmessage:boolean = false;
  constructor() { }

  ngOnInit() {
    this.menuItemBar();
  }
  menuItemBar(){
    //alert();
    if( /iPad|iPod/i.test(navigator.userAgent) ) {
    //  alert('ipad');
     this.warnmessage = true;
     }
     else if( /iPhone|IEMobile/i.test(navigator.userAgent) ) {
     
      
     }
     else{
      this.warnmessage = false;
      //alert('not');
     }
  }
}
