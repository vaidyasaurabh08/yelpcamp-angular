import { Component, OnInit } from '@angular/core';
import { ManageCampsService } from '../manage-campgrounds.service'; 

@Component({
  selector: 'app-all-camps',
  templateUrl: './all-camps.component.html',
  styleUrls: ['./all-camps.component.css']
})
export class AllCampsComponent implements OnInit {

  constructor( private allCampService : ManageCampsService ) { }

  allCamps = this.allCampService.getAllCamps();

  ngOnInit() {
  	this.allCamps = this.allCampService.getAllCamps();
  }

}
