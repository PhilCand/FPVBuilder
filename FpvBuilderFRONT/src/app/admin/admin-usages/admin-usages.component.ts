import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IUsage } from 'src/app/builder/parts/usages/usage';
import { usageService } from 'src/app/builder/parts/usages/usage.service';
import { UsageDialogComponent } from './usage-dialog/usage-dialog.component';



@Component({
  selector: 'app-admin-usages',
  templateUrl: './admin-usages.component.html',
  styleUrls: ['./admin-usages.component.css']
})
export class AdminUsagesComponent implements OnInit, OnDestroy {
  constructor(private _usageService: usageService, public dialog: MatDialog) { }
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  displayedColumns: string[] = ['nom', 'description', 'action'];
  usages: IUsage[] = [];
  newUsage: IUsage = {Tu_Id:0, Tu_Nom: "", Tu_Description: ""}
  sub!: Subscription;


  ngOnInit(): void {
    this.getUsages()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getUsages() {
    this.sub = this._usageService.getUsages().subscribe({
      next: usages => {
        this.usages = usages;
      }
    })
  }

  openDialog(action: string, usage: IUsage) {
    usage.Action = action;
    const dialogRef = this.dialog.open(UsageDialogComponent, {
      width: usage.Action == 'Suppression' ? '300px' : '600px',
      data: usage
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Ajout') {
        this.createUsage(result.data);
      } else if (result.event == 'Edition') {
        this.updateUsage(result.data);
      } else if (result.event == 'Suppression') {
        this.deleteUsage(result.data);
      }
    });
  }

  createUsage(usage: IUsage) {
    this._usageService.createUsage(usage).subscribe(
      response => {
        this.getUsages();
      }
    )
  }
  updateUsage(usage: IUsage) {
    this._usageService.updateUsage(usage).subscribe(
      response => {
        this.getUsages();
      }
    )
  }
  deleteUsage(usage: IUsage) {
    this._usageService.deleteUsage(usage.Tu_Id).subscribe(
      response => {
        this.getUsages();
      })
  }



}
