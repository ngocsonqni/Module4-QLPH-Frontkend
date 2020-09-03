import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Room} from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  API_URL = 'http://localhost:8080/admin/room';
  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Room[]>{
    return this.httpClient.get<Room[]>(this.API_URL);
  }
}
