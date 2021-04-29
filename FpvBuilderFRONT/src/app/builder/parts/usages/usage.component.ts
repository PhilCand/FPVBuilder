import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from "rxjs";
import { builderService } from '../../builder.service';
import { IUsage } from './usage';
import { usageService } from './usage.service';
import { IBuild } from '../../builder';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css'],
})
export class UsageComponent implements OnInit, OnDestroy {

  constructor(private _usageService: usageService, 
    private _builderService: builderService) { }

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
    }),
    this.resetUsage()    
  };

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  nextStep(usage: IUsage): void {
    this.currentStep.emit(1);  
    this.build.Usage = usage;    
    this._builderService.setBuild(this.build) 
    sessionStorage.setItem('currentBuild', JSON.stringify(this.build));     
  }

  resetUsage(): void{
    delete this.build.Usage
    this._builderService.setBuild(this.build) 
    sessionStorage.setItem('currentBuild', JSON.stringify(this.build));
  }
}


