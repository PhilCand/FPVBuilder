import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { IBuild } from './builder'
import { IUsage } from './parts/usages/usage';

@Injectable({
 providedIn: 'root'
})
export class builderService {

    private _build : Subject<IBuild> = new ReplaySubject<IBuild>(1);
    build = this._build.asObservable();
 

    setBuild(build: IBuild){
        this._build.next(build);


    }

}