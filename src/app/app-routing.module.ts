import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { CampComponent } from './all-camps/camp/camp.component';
import { CampEditComponent } from './all-camps/camp-edit/camp-edit.component';
import { AllCampsComponent } from './all-camps/all-camps.component';
import { CampNewComponent } from './all-camps/camp-new/camp-new.component';

// import {AuthGuard} from "./auth-guard.service";


// appRoutes will hold all the routes in an array
const appRoutes: Routes = [
  { path : '' , redirectTo: '/landing', pathMatch:'full' },
  { path : 'landing' , component : LandingComponent },
  { path : 'camp' , component : AllCampsComponent },
  { path : 'camp/new' , component: CampNewComponent },
  { path: 'camp/:id' , component : CampComponent  },
  { path: 'camp/:id/edit'  , component : CampEditComponent }

];

@NgModule({
  // register our routes stored in "appRoutes" in the angular app using RouterModule and the below syntax
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


