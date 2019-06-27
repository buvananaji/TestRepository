import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogwindowComponent} from './../dialogwindow/dialogwindow.component'
import {  Router, } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projectDetails = {'project_type':'New Project','project_name':'','project_description':'','aws_provider':false,
'azure_provider':false,'google_provider':false,'current_resource_provision':'AWS',
'cloud_subscription':'ProdSubscription','script_generation':'Terraform Scripts'};
cloudCubscription = ['ProdSubscription','1','2'];
scriptGeneration = ['Terraform Scripts','Cloud formation template','ARM Templates','Google Rest API'];
exist_project_details = {'exist_project_name':'','exist_aws_provider':false,'exist_azure_provider':false,
'exist_google_provider':false,'add_exist_aws_provider':'',
'add_exist_azure_provider':'','add_exist_google_provider':'','exist_current_resource':'AWS'};
constructor(public dialog: MatDialog,private router: Router) {}
  ngOnInit() {
    
  }
  
  onSubmit() {
    if(this.projectDetails.aws_provider == true || this.projectDetails.azure_provider == true || this.projectDetails.google_provider == true)
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.projectDetails))
    this.router.navigate(['sidenav',this.projectDetails.current_resource_provision]);
  }
  existNext(){
    if(this.exist_project_details.exist_aws_provider == true || this.exist_project_details.exist_azure_provider == true || this.exist_project_details.exist_google_provider == true){
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.exist_project_details))
    this.router.navigate(['sidenav',this.exist_project_details.exist_current_resource]);
  }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogwindowComponent, {
      width: '500px',
      data: [{'id':1,'project_name':'AWS','Project_Description':'hey AWS'},
      {'id':2,'project_name':'Azure','Project_Description':'hey Azure'},
      {'id':3,'project_name':'Google','Project_Description':'hey Google'}]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+JSON.stringify(result));
      //this.animal = result;
      this.exist_project_details.exist_project_name = result.project_name;
    });
  }

}
