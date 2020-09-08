import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Room} from '../models/room';
import {PageEvent} from '@angular/material/paginator';
import {Page} from '../models/pagination/page';
import {Region} from '../models/region';
import {Status} from '../models/status';
import {TypeRoom} from '../models/type-room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  API_URL = 'http://localhost:8080/admin/room';
  API_URL_SEARCH = 'http://localhost:8080/admin/room-search';
  API_URL2 = 'http://localhost:8080/admin/';
  constructor(private httpClient: HttpClient) {
  }

  findAll(page: PageEvent): Observable<Page<Room>> {
    return this.httpClient.get<Page<Room>>(this.API_URL + '?page=' + page.pageIndex + '&size=' + page.pageSize);
  }

  search(page: PageEvent, name, floor, capacity, typeRoom, region, status): Observable<Page<Room>> {
    return this.httpClient.get<Page<Room>>(this.API_URL_SEARCH + '?page=' + page.pageIndex + '&size=' + page.pageSize + '&name=' + name + '&floor=' + floor
      + '&capacity=' + capacity + '&typeRoom=' + typeRoom + '&region=' + region + '&status=' + status);
  }

  findAllRegion(): Observable<Region[]>{
    return this.httpClient.get<Region[]>(this.API_URL2 + 'region')
  }

  findAllStatus(): Observable<Status[]>{
    return this.httpClient.get<Status[]>(this.API_URL2 + 'status')
  }

  findAllTypeRoom(): Observable<TypeRoom[]>{
    return this.httpClient.get<TypeRoom[]>(this.API_URL2 + 'typeRoom')
  }
}
