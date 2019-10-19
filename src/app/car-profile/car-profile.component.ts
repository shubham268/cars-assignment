import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-car-profile',
  templateUrl: './car-profile.component.html',
  styleUrls: ['./car-profile.component.css']
})
export class CarProfileComponent implements OnInit {
  data:any = {};
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getCarProfile();
  }

}
