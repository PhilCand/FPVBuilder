import { Component, ElementRef, EventEmitter, Input, Output} from "@angular/core";


@Component({
    selector: "app-timeLine",
    templateUrl: "./time-line.component.html",
    styleUrls: ["./time-line.component.css"]
})
export class timeLineComponent{
    constructor(private elRef:ElementRef) {};
    currentIndex: number = 0;
    @Input() currentStep: number;
    @Output() currentStepOut = new EventEmitter<number>();

    next(): void{
        if (this.currentStep < 10) this.currentStep ++
        this.currentStepOut.emit(this.currentStep); 
    }

    previous(): void{   
        if (this.currentStep > 0) this.currentStep --        
        this.currentStepOut.emit(this.currentStep); 
    }


}

