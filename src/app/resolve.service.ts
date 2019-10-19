import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<any>{

  constructor(private dataService: DataService) { }

  resolve(){
    return this.dataService.resolve();
  }
}
