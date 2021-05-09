import { Component, OnInit } from '@angular/core';
import { IBuild } from '../builder/builder';
import { builderService } from '../builder/builder.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _builderService: builderService) { }
  build = <IBuild>{};
  ngOnInit(): void {
  }

  resetBuild() {
    this._builderService.setBuild(this.build)
    sessionStorage.setItem('currentBuild', JSON.stringify(this.build));
    sessionStorage.setItem('currentStep', JSON.stringify(0));
  }

}
