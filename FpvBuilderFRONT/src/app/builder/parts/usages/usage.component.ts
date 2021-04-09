import { Component, OnDestroy, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from "rxjs";
import { IUsage } from './usage';
import { usageService } from './usage.service';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css'],
})
export class UsageComponent implements OnInit, OnDestroy {

  constructor(private usageService: usageService) { }

  usages: IUsage[] = [];
  errorMessage: string = "";
  sub!: Subscription;
  @Output() currentStep = new EventEmitter<number>();


  ngOnInit(): void {
    this.sub = this.usageService.getUsages().subscribe({
      next: usages => {
        this.usages = usages;        
      },
      error: err => this.errorMessage = err
    })
  };

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  nextStep(usage: IUsage): void {
    sessionStorage.setItem('usage', JSON.stringify(usage));    
    this.currentStep.emit(1);         
  }

}


