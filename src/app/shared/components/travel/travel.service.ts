import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Travel } from "./travel.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TravelService {
  static read(): Travel[] {
      throw new Error('Method not implemented.');
  }
  baseUrl = "http://localhost:8090/api/v1/travel";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(travel: Travel): Observable<Travel> {
    return this.http.post<Travel>(this.baseUrl, travel).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Travel[]> {
    return this.http.get<Travel[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Travel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Travel>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(travel: Travel): Observable<Travel> {
    const url = `${this.baseUrl}/${travel.url}`;
    return this.http.put<Travel>(url, travel).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Travel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Travel>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}