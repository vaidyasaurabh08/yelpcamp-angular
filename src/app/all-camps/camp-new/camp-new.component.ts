import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ManageCampsService} from '../../manage-campgrounds.service';
import {Camp} from "../../shared/camp.model";


@Component({
  selector: 'app-camp-new',
  templateUrl: './camp-new.component.html',
  styleUrls: ['./camp-new.component.css']
})
export class CampNewComponent implements OnInit {

  // @ViewChild('f') newCampForm: NgForm;

  newcamp = {
    name: '',
    imageurl : '',
    description : ''
  };




  constructor( private allCampsService : ManageCampsService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm ){
    // console.log(form);
    this.newcamp.name = form.value.campname;
    this.newcamp.imageurl = form.value.campimage;
    this.newcamp.description = form.value.campdescription;
    const newCampground = new Camp ( this.newcamp.name , this.newcamp.description ,this.newcamp.imageurl ,5 );
    this.allCampsService.addCamp( newCampground );

    form.reset();
  }

}
