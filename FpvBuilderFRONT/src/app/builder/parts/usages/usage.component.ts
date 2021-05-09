import { Component, OnDestroy, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Subscription } from "rxjs";
import { builderService } from '../../builder.service';
import { IUsage } from './usage';
import { usageService } from './usage.service';
import { IBuild } from '../../builder';
import { ControlContainer, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit, OnDestroy {
  usageFormGroup: FormGroup;
  constructor(private _usageService: usageService, 
    private _builderService: builderService    
    ) { }

  usages: IUsage[] = [];
  build = <IBuild>{};
  errorMessage: string = "";
  sub!: Subscription;
  @Output() currentStep = new EventEmitter<number>();
  

  ngOnInit(): void {
    this.sub = this._usageService.getUsages().subscribe({
      next: usages => {
        this.usages = usages;        
      },
      error: err => this.errorMessage = err
    }),
    this._builderService.build.subscribe(result => {
      this.build = result;
    })    
  };

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  nextStep(usage: IUsage): void {
    this.currentStep.emit(1);  
    this.build.Usage = usage;    
    this._builderService.setBuild(this.build) 
    sessionStorage.setItem('currentBuild', JSON.stringify(this.build)); 
    sessionStorage.setItem('currentStep', JSON.stringify(1));       
  }

  
}


