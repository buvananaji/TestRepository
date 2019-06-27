import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class CommonService {

  basePath: string = environment.apiUrl;
  


  private progessBarSource = new BehaviorSubject(1);
  currentprogessBar = this.progessBarSource.asObservable();

 
  constructor(private http: HttpClient) {}
  
  changeProgessBar(message: any) {
    this.progessBarSource.next(message)
  }
 
  

}
