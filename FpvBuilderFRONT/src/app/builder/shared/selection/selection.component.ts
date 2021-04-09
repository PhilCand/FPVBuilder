import { Component, OnInit } from '@angular/core';
import { IUsage } from '../../parts/usages/usage';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  constructor() { }
  usage: Partial<IUsage> = {};

  ngOnInit(): void {
    if (sessionStorage.getItem("usage") != null) this.usage = JSON.parse(sessionStorage.usage)
  }

}
