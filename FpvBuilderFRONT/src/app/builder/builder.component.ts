import { Component, OnInit } from "@angular/core";
import { IBuild } from "./builder";


@Component({
    templateUrl: "./builder.component.html",
    styleUrls: ["./builder.component.css"]
})
export class builderComponent implements OnInit{
    currentStep: number = 0;
    build = <IBuild>{};

    ngOnInit(){
        this.currentStep = parseInt(sessionStorage.getItem('currentStep') || "0");
    }

    goToStep(step: number): void {        
        this.currentStep = step;
        sessionStorage.setItem('currentStep', step.toString()); 
    }

    test(){
        console.log(sessionStorage.getItem('currentBuild'));
        console.log(sessionStorage.getItem('currentStep'))
    }

}