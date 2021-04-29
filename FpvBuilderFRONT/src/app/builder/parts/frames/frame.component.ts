import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from "rxjs";
import { builderService } from '../../builder.service';
import { IFrame } from './frame';
import { frameService } from './frame.service';
import { IBuild } from '../../builder';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit, OnDestroy {

  constructor(private frameService: frameService,
    private _builderService: builderService) { }

  frames: IFrame[]= [];
  filteredFrames: IFrame[]= [];
  private _listFilter: string = '';
  order: boolean;
  build = <IBuild>{};
  errorMessage: string = "";
  sub!: Subscription;
  @Output() currentStep = new EventEmitter<number>();

  get listFilter() : string {
    return this._listFilter;
}

  set listFilter(value : string){
    this._listFilter = value
    this.filteredFrames = this.performFilter(value)
  } 

  performFilter(filteredBy: string): IFrame[] {
    filteredBy = filteredBy.toLocaleLowerCase();
    return this.frames.filter((frame: IFrame) => 
    frame.Fr_Marque.toLocaleLowerCase().includes(filteredBy) ||
    frame.Fr_Modele.toLocaleLowerCase().includes(filteredBy)
    );
  }

  ngOnInit(): void {
    this.sub = this.frameService.getFrames().subscribe({
      next: frames => {
        this.frames = frames;  
        this.filteredFrames = this.frames;      
      },
      error: err => this.errorMessage = err
    }),
    this._builderService.build.subscribe(result => {
      this.build = result;
    }),
    this.resetFrame();
  };

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  nextStep(frame: IFrame): void {
    this.currentStep.emit(2);  
    this.build.Frame = frame;    
    this._builderService.setBuild(this.build)   
    sessionStorage.setItem('currentBuild', JSON.stringify(this.build));
  }

  resetFrame(): void{
    delete this.build.Frame
    this._builderService.setBuild(this.build) 
    sessionStorage.setItem('currentBuild', JSON.stringify(this.build));
  }

  sortByPrice(){
    this.order = !this.order;
    this.filteredFrames = this.filteredFrames.sort((f1,f2) => 
    this.order? f1.Fr_Prix - f2.Fr_Prix:f2.Fr_Prix - f1.Fr_Prix)     
  }
}
