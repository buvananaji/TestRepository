import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FlexLayoutModule, BREAKPOINT} from '@angular/flex-layout';
import { MaterialModule } from './common/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RrrrrrService } from './services/rrrrrr.service';
import { CommonService } from './services/common-service'
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from 'ngx-alerts';
import { from } from 'rxjs/internal/observable/from';
import { NgxLoadingModule } from 'ngx-loading';
import { HomeComponent } from './home/home.component';
import { DialogwindowComponent } from './dialogwindow/dialogwindow.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StoragecontainerComponent } from './Azure/storagecontainer/storagecontainer.component';
import { WebappComponent } from './Azure/webapp/webapp.component';
import { ApiappComponent } from './Azure/apiapp/apiapp.component';
import { FunctionappComponent } from './Azure/functionapp/functionapp.component';
import { GeneralstorageComponent } from './Azure/generalstorage/generalstorage.component';
import { ApplicationinsightComponent } from './Azure/applicationinsight/applicationinsight.component';
import { ResourcegroupComponent } from './Azure/resourcegroup/resourcegroup.component';
import { SqlserverinstanceComponent } from './Azure/sqlserverinstance/sqlserverinstance.component';
import { SqlserverdbComponent } from './Azure/sqlserverdb/sqlserverdb.component';
import { AppengineComponent } from './Google/appengine/appengine.component';
import { StoragebucketComponent } from './Google/storagebucket/storagebucket.component';
import { SqlinstanceComponent } from './Google/sqlinstance/sqlinstance.component';
import { SqldatabaseComponent } from './Google/sqldatabase/sqldatabase.component';
import { TitleComponent } from './title/title.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DialogwindowComponent,
    SidenavComponent,
    StoragecontainerComponent,
    WebappComponent,
    ApiappComponent,
    FunctionappComponent,
    GeneralstorageComponent,
    ApplicationinsightComponent,
    ResourcegroupComponent,
    SqlserverinstanceComponent,
    SqlserverdbComponent,
    AppengineComponent,
    StoragebucketComponent,
    SqlinstanceComponent,
    SqldatabaseComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule.withConfig({useColumnBasisZero: false}),
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})
  ],
  entryComponents: [
    DialogwindowComponent
  ],
  providers: [RrrrrrService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
