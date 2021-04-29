import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators"
import { IUsage } from "./usage";


@Injectable({
    providedIn: 'root'
})
export class usageService{
    private usageUrl = 'https://localhost:5001/api/Usage/';

  constructor(private http: HttpClient){}

getUsages(): Observable<IUsage[]>{
  return this.http.get<IUsage[]>(this.usageUrl).pipe(    
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