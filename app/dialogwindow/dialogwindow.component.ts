import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  id: number;
  project_name: string;
  Project_Description:string
}

@Component({
  selector: 'app-dialogwindow',
  templateUrl: './dialogwindow.component.html',
  styleUrls: ['./dialogwindow.component.css']
})
export class DialogwindowComponent {
  listprojects:any;
  constructor(
    public dialogRef: MatDialogRef<DialogwindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


}
