import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Region} from '../models/region';

@Injectable({
  providedIn: 'root'
})
export class SearchRoomService {
  getBaseURL = 'http://localhost:8080/get/';

  constructor(private http: HttpClient) {
  }

  getRegion(): Observable<any> {
    return this.http.get(this.getBaseURL + 'region');
  }
  getTypeMeeting(): Observable<any> {
    return this.http.get(this.getBaseURL + 'typemeeting');
  }
}
