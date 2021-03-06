import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IBuild } from '../../builder';
import { builderService } from '../../builder.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent {

  constructor(private _builderService: builderService) { }
  
  build = <IBuild> {};
  total: number = 0;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.buildFromService();
      // this.buildFromSession();      
    });
  }

  calculate(build: IBuild){
    this.total = 0
    if (build.Frame){
      this.total += build.Frame.Fr_Prix;
    }  
  }

  // buildFromSession(): void{
  //   this.build = JSON.parse(sessionStorage.getItem("currentBuild") as any);
  //   if (this.build){this.calculate(this.build)}
  //   console.log(sessionStorage.getItem('currentBuild'))    
  // }

  buildFromService(): void{
    this._builderService.build.subscribe(result => {
      this.build = result;
      this.calculate(this.build);      
    });
  }

}
