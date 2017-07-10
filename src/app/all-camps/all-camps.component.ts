import { Component, OnInit } from '@angular/core';
import { ManageCampsService } from '../manage-campgrounds.service';
import {DataStorageService} from '../shared/data-storage.service';
import { Response } from '@angular/http';
import {Camp} from '../shared/camp.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-all-camps',
  templateUrl: './all-camps.component.html',
  styleUrls: ['./all-camps.component.css']
})
export class AllCampsComponent implements OnInit {

  subscription: Subscription;
  allCamps: Camp[];

  constructor( private allCampService : ManageCampsService ,  private  dataStorageService:DataStorageService) { }

  // allCamps = this.allCampService.getAllCamps();

  ngOnInit() {
  	// this.allCamps = this.allCampService.getAllCamps();
    this.subscription = this.allCampService.campsChanged
      .subscribe(
        (camps: Camp[]) => {
          this.allCamps = camps;
        }
      );
    this.allCamps = this.allCampService.getAllCamps();
  }

  onSaveData(){
    this.dataStorageService.storeCamps().subscribe(
      (response : Response) => {console.log(response);}
    );
  }

  onGetData(){
    this.dataStorageService.getCamps();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
