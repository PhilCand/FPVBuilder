import { Component, OnDestroy, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from "rxjs";
import { IFrame } from './frame';
import { frameService } from './frame.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit, OnDestroy {

  constructor(private frameService: frameService) { }

  frames: IFrame[]= [];
  errorMessage: string = "";
  sub!: Subscription;
  @Output() currentStep = new EventEmitter<number>();


  ngOnInit(): void {
    this.sub = this.frameService.getFrames().subscribe({
      next: frames => {
        this.frames = frames;        
      },
      error: err => this.errorMessage = err
    })
  };

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  nextStep(): void {
    this.currentStep.emit(2);         
  }
}
