import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  data:any = {};
  carNames:string[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getCarDetails();
    this.carNames = this.dataService.getCarNames();
  }

}
