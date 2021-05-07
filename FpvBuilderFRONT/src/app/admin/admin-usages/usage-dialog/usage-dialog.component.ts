import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IFrame } from 'src/app/builder/parts/frames/frame';




@Component({
  selector: 'app-usage-dialog',
  templateUrl: './usage-dialog.component.html',
  styleUrls: ['./usage-dialog.component.css']
})
export class UsageDialogComponent {

  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<UsageDialogComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IFrame) {
    //console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.Action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}
