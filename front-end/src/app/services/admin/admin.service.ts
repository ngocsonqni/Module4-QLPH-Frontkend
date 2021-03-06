import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Member} from '../../models/member';
import {catchError} from 'rxjs/operators';
import {Role} from "../../models/role";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API_URL = 'http://localhost:8080/user';
  API_ROLE_URL = 'http://localhost:8080/role';

  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  handleError(error: HttpErrorResponse) {
    let errorMessage;
    if (error.error instanceof ErrorEvent) {
      errorMessage = '';
    } else {
      errorMessage = '';
    }
    return throwError(errorMessage);
  }

  findAll(): Observable<Member[]> {
    return this.httpClient.get<Member[]>(this.API_URL)
      .pipe(catchError(this.handleError));
  }

  findMemberById(id: number): Observable<Member> {
    return this.httpClient.get<Member>(this.API_URL + '/' + id)
      .pipe(catchError(this.handleError));
  }
  findAllMemberWithPage(currentPage, size, search): Observable<any> {
    return this.httpClient.get(this.API_URL + '?page=' + currentPage + '&size=' + size + '&search=' + search);
  }
  create(member: Member): Observable<any> {
    return this.httpClient.post<Member>(this.API_URL + '/create', member)
      .pipe(catchError(this.handleError));
  }
  findAllRole(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(this.API_ROLE_URL).pipe(catchError(this.handleError));
  }
}
