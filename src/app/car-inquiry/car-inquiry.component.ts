import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-car-inquiry',
  templateUrl: './car-inquiry.component.html',
  styleUrls: ['./car-inquiry.component.css']
})
export class CarInquiryComponent implements OnInit {
  @Input() template:string;
  inqs:any = {};
  carNames:any[] = [];
  dropdown:any[] = [];
  ddlType:string;
  title:any = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    let data = this.dataService.getInquiry()[this.template];
    this.title = data.title;
    this.inqs = data.inqs.map(d=>({...d,
      date:new Date(d.date)}));
    
    this.dropdown = data.dropdown.ddl;
    this.ddlType = data.dropdown.type;
    this.carNames = this.dataService.getCarNames();
  }

}
