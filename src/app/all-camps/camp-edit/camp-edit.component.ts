import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Camp} from '../../shared/camp.model';
import {ManageCampsService} from '../../manage-campgrounds.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-camp-edit',
  templateUrl: './camp-edit.component.html',
  styleUrls: ['./camp-edit.component.css']
})
export class CampEditComponent implements OnInit {
  // @ViewChild('f') campform : NgForm;

  allowEdit = false;
  editMode = true;
  id: number;
  camptoedit :Camp;
  newcamp: Camp;

  constructor( private route: ActivatedRoute , private allCampsService : ManageCampsService, private router: Router ) { }

  ngOnInit() {
  //   this.route.queryParams.subscribe(
  //     (queryParams: Params )=>{
  //       this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
  //
  //     }
  //   );
    console.log(this.route.params['id']);
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.camptoedit = this.allCampsService.getCamp(this.id);
        console.log(this.camptoedit);
      }
    );
  }

  onSubmit(form:NgForm ){
    console.log(this.editMode);
    // console.log(form);
    this.newcamp.name = form.value.campname;
    this.newcamp.imagePath = form.value.campimage;
    this.newcamp.description = form.value.campdescription;
    const newCampground = new Camp ( this.newcamp.name , this.newcamp.description , this.newcamp.imagePath ,this.id );
    this.allCampsService.updateCamp(  this.id , newCampground);
    // this.editMode = false;
    // this.router.navigate(['/']);
    // console.log(this.editMode);

    form.reset();
  }

  onDelete(){
    this.allCampsService.deleteCamp(this.id);
  }

}
