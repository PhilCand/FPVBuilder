import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators"
import { IFrame } from "./frame";
import { environment } from "src/environments/environment"

@Injectable({
    providedIn: 'root'
})
export class frameService{

    private usageUrl = environment.apiUrl+'api/Frame/';

  constructor(private http: HttpClient){}

getFrames(): Observable<IFrame[]>{
  return this.http.get<IFrame[]>(this.usageUrl).pipe(
    catchError(this.handleError)
  );
}
 private handleError(err: HttpErrorResponse){
   let errorMessage = '';
   if (err.error instanceof ErrorEvent){
     errorMessage = `An error occured: ${err.error.message}`
   } else {
     errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
   }
   console.error(errorMessage);
   return throwError(errorMessage);
 }
}
