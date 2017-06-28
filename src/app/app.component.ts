import { Component } from '@angular/core';
import { ManageCampsService } from './manage-campgrounds.service'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ ManageCampsService ]
})
export class AppComponent {
  title = 'app';
}
