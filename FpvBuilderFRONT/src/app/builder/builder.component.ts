import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: "./builder.component.html",
    styleUrls: ["./builder.component.css"]
})
export class builderComponent implements OnInit{
    currentStep: number = 0;


    ngOnInit(){
        this.currentStep = parseInt(sessionStorage.getItem('currentStep') || "0");
    }

    goToStep(step: number): void {
        this.currentStep = step
        sessionStorage.setItem('currentStep', step.toString());                        
    }
}