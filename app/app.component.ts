import { Component } from '@angular/core';
import { CommonService } from './services/common-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  progessPercentage:number = 1;
  constructor(private commonservice:CommonService) {
  }
  ngOnInit(){
    this.commonservice.currentprogessBar.subscribe(message =>{
     // if(message != 1){
      // alert(message);
        this.progessPercentage = message;
      //}
    }, error=>{
      console.log('error'+error);
    });
  }

}
