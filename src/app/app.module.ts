import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { AllCampsComponent } from './all-camps/all-camps.component';
import { CampComponent } from './all-camps/camp/camp.component';
import { CampEditComponent } from './all-camps/camp-edit/camp-edit.component';
import {AuthService} from './auth-service';
import {AuthGuard} from './auth-guard.service';

import { CampNewComponent } from './all-camps/camp-new/camp-new.component';
import {HttpModule} from '@angular/http';
import {DataStorageService} from './shared/data-storage.service';
import {ManageCampsService} from './manage-campgrounds.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    AllCampsComponent,
    CampComponent,
    CampEditComponent,

    CampNewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ AuthService, AuthGuard , DataStorageService, ManageCampsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
