import { Component, OnInit } from '@angular/core';
import {ManageCampsService} from '../../manage-campgrounds.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Camp} from '../../shared/camp.model';


@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.css']
})
export class CampComponent implements OnInit {

  // camp: {name: string, desc: string, imagePath: string , id: number};

  camp:Camp;
  constructor( private allCampsService: ManageCampsService,
               private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.camp = this.allCampsService.getCamp(id);

  }

  onEdit(){
   this.router.navigate(['edit'] , {relativeTo : this.route ,   queryParamsHandling : 'preserve'   }   );
  }

}
