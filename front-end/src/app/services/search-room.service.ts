import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchRoomService {
  getBaseURL = 'http://localhost:8080/get/';
  baseURL = 'http://localhost:8080/user/search-room';

  constructor(private http: HttpClient) {
  }

  getRoom(typemeeting: string, region: string, startdate: string, enddate: string, numberofuser: string,
          asset: string): Observable<any> {
    return this.http.get(this.baseURL + '?typemeeting=' + typemeeting + '&region=' + region +
      '&startdate=' + startdate + '&enddate=' + enddate + '&numberofuser=' + numberofuser +
      '&asset=' + asset);
  }

  getRegion(): Observable<any> {
    return this.http.get(this.getBaseURL + 'region');
  }

  getTypeMeeting(): Observable<any> {
    return this.http.get(this.getBaseURL + 'typeroom');
  }
}
