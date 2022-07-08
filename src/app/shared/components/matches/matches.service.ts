import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Matches } from "./matches.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MatchesService {
  static read(): Matches[] {
      throw new Error('Method not implemented.');
  }
  baseUrl = "http://localhost:8090/api/v1/match";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(matches: Matches): Observable<Matches> {
    return this.http.post<Matches>(this.baseUrl, matches).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Matches[]> {
    return this.http.get<Matches[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Matches> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Matches>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(matches: Matches): Observable<Matches> {
    const url = `${this.baseUrl}/${matches.url}`;
    return this.http.put<Matches>(url, matches).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Matches> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Matches>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}