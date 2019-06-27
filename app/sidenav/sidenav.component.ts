import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  project_type:any;
  opened: boolean = true;
  selectlist:any;
  constructor(private route :ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.project_type = param.current_resource;
      });
      let a:any = window.location.href;
      this.selectlist  = a.split('/sidenav')[1].split('/')[2];
     // console.log('this.route.url--->', this.route.snapshot.url)
  }

}
