import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import {contentHeaders} from "./headers/auth-headers";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RrrrrrService {
  basePath: string = environment.apiUrl;
  basePathDb: string = environment.apiUrlDb;
  constructor(private http: HttpClient) { }
  
  create(data) {
    console.log('data',data);
    let url = this.basePath+'runterraformscripts';
    return this.http.post(url,data,{headers: contentHeaders});
  }
  delete(data) {
    console.log('data',data);
    let url = this.basePath+'deleteresources';
    return this.http.post(url,data,{headers: contentHeaders});
  }
  logger() {
    let url = this.basePath+'readlogs';
    return this.http.get(url,{headers: contentHeaders});
  }
  provider() {
    let url = this.basePathDb+'getproviders';
    return this.http.get(url,{headers: contentHeaders});
  }
  referenceIDs(provider) {
    let url = this.basePath+'getreferenceids/'+provider;
    return this.http.get(url,{headers: contentHeaders});
  }
  os() {
    let url = this.basePathDb+'getos';
    return this.http.get(url,{headers: contentHeaders});
  }
  memory(data) {
    let url = this.basePathDb+'getmemory';
    return this.http.post(url,{'provider':data},{headers: contentHeaders});
  }
  vcpus(data) {
    let url = this.basePathDb+'getvcpu';
    return this.http.post(url,{'memory':data},{headers: contentHeaders});
  }
}
