import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:any;
  resolved: boolean = false;
  constructor(private http: HttpClient) {
  }

  resolve(){
    return  this.resolved || this.http.get('/assets/mock.json').pipe(
      map(data=>{
        this.data = data;
        this.resolved = true;
        return true;
      }));
  }

  getCarNames(){
    return this.data['car_names'];
  }

  getCarDetails(){
    return this.data['car_details'];
  }

  getCarProfile(){
    return this.data['car_profile'];
  }

  getInquiry(){
    return this.data['inquiry'];
  }
}
