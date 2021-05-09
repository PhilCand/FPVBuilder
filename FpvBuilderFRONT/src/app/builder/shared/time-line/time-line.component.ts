import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { IBuild } from '../../builder';
import { builderService } from '../../builder.service';


@Component({
  selector: 'app-timeLine',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class timeLineComponent implements OnInit {
  isLinear = false;

  @ViewChild('stepper') stepper: MatStepper;
  // currentStep: number = 0;
  build = <IBuild>{};
  usageComponent: FormGroup;

  constructor(private _builderService: builderService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._builderService.build.subscribe(result => {
      this.build = result;
    }),
    this.usageComponent = this._formBuilder.group({});    
  }

  // ngAfterViewInit(): void {
  //   setTimeout(() => {
  //     this.currentStep = sessionStorage.getItem('currentStep') == null ? 0 : parseInt(sessionStorage.getItem('currentStep') as any)
  //     this.stepper.selectedIndex = this.currentStep;
  //   });
  // }

  selectionChange(stepper: MatStepper) {
    switch (this.stepper.selectedIndex) {
      case 0: {
        this.build = {};
        break;
      }
      case 1: {
        delete this.build.Frame;
      }
    }
    this._builderService.setBuild(this.build)
    // sessionStorage.setItem('currentBuild', JSON.stringify(this.build));
  }


}
