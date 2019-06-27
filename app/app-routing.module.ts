import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ApiappComponent } from './Azure/apiapp/apiapp.component';
import { ApplicationinsightComponent } from './Azure/applicationinsight/applicationinsight.component';
import { FunctionappComponent } from './Azure/functionapp/functionapp.component';
import { GeneralstorageComponent } from './Azure/generalstorage/generalstorage.component';
import { ResourcegroupComponent } from './Azure/resourcegroup/resourcegroup.component';
import { SqlserverdbComponent } from './Azure/sqlserverdb/sqlserverdb.component';
import { SqlserverinstanceComponent } from './Azure/sqlserverinstance/sqlserverinstance.component';
import { StoragecontainerComponent } from './Azure/storagecontainer/storagecontainer.component';
import { WebappComponent } from './Azure/webapp/webapp.component';

import { AppengineComponent } from './Google/appengine/appengine.component';
import { SqldatabaseComponent } from './Google/sqldatabase/sqldatabase.component';
import { SqlinstanceComponent } from './Google/sqlinstance/sqlinstance.component';
import { StoragebucketComponent } from './Google/storagebucket/storagebucket.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'sidenav/:current_resource',
    component: SidenavComponent,
    children: [
      {
        path: 'apiapp',
        component: ApiappComponent
      },
      {
        path: 'applinsight',
        component: ApplicationinsightComponent
      },
      {
        path: 'funapp',
        component: FunctionappComponent
      },
      {
        path: 'genstorage',
        component: GeneralstorageComponent
      },
      {
        path: 'resgroup',
        component: ResourcegroupComponent
      },
      {
        path: 'sqlserdb',
        component: SqlserverdbComponent
      },
      {
        path: 'sqlserinstance',
        component: SqlserverinstanceComponent
      },
      {
        path: 'storagecontain',
        component: StoragecontainerComponent
      },
      {
        path: 'webapp',
        component: WebappComponent
      },
      {
        path: 'appengine',
        component: AppengineComponent
      },
      {
        path: 'sqldatabase',
        component: SqldatabaseComponent
      },
      {
        path: 'sqlinstance',
        component: SqlinstanceComponent
      },
      {
        path: 'storagebucket',
        component: StoragebucketComponent
      }
    ]
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
