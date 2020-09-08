import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {BookingRoom} from '../models/booking-room';
import {Room} from '../models/room';
import {TypeRoom} from '../models/type-room';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  API_URL_START_END = 'http://localhost:8080/startAndEnd/';
  API_URL_START = 'http://localhost:8080/start/';
  API_URL_END = 'http://localhost:8080/end/';
  API_URL_ROOM = 'http://localhost:8080/room/';
  API_URL_TYPE = 'http://localhost:8080/type/';
  API_URL_TYPE_ROOM = 'http://localhost:8080/typeAndRoom/';
  API_URL_ALL_ROOM = 'http://localhost:8080/allRoom/';
  API_URL_ALL_TYPE = 'http://localhost:8080/allType/';
  API_URL_ALL_BOOKING_DAY = 'http://localhost:8080/bookingDay/';
  API_URL_ALL_ROOM_BOOKING_DAY = 'http://localhost:8080/roomAndBookingDay/';
  API_URL_ALL_TYPE_BOOKING_DAY = 'http://localhost:8080/typeAndBookingDay/';
  API_URL_ALL_ROOM_TYPE_BOOKING_DAY = 'http://localhost:8080/roomTypeBookingDay/';

  constructor(private httpClient: HttpClient) { }

  findAllListRoom(): Observable<Room[]> {
    return this.httpClient.get<Room[]>(this.API_URL_ALL_ROOM);
  }
  findAllListType(): Observable<TypeRoom[]> {
    return this.httpClient.get<TypeRoom[]>(this.API_URL_ALL_TYPE);
  }
  findAllStartAndEnd(startDay: string, endDay: string): Observable<BookingRoom[]> {
    return this.httpClient.get<BookingRoom[]>(this.API_URL_START_END + '?startDay=' + startDay + '&endDay=' + endDay);
  }
  findAllStart(startDay: string): Observable<BookingRoom[]> {
    return this.httpClient.get<BookingRoom[]>(this.API_URL_START + '?startDay=' + startDay);
  }
  findAllEnd(endDay: string): Observable<BookingRoom[]> {
    return this.httpClient.get<BookingRoom[]>(this.API_URL_END + '?endDay=' + endDay);
  }
  findAllRoom(nameRoom: string): Observable<BookingRoom[]> {
    return this.httpClient.get<BookingRoom[]>(this.API_URL_ROOM + '?nameRoom=' + nameRoom);
  }
  findAllType(nameType: string): Observable<BookingRoom[]> {
    return this.httpClient.get<BookingRoom[]>(this.API_URL_TYPE + '?nameType=' + nameType);
  }
  findAllTypeAndRoom(nameRoom: string, nameType: string): Observable<BookingRoom[]> {
    return this.httpClient.get<BookingRoom[]>(this.API_URL_TYPE_ROOM + '?nameRoom=' + nameRoom + '&nameType=' + nameType);
  }
  findAllBookingDay(bookingDay: string): Observable<BookingRoom[]> {
    return this.httpClient.get<BookingRoom[]>(this.API_URL_ALL_BOOKING_DAY + '?bookingDay=' + bookingDay);
  }
  findAllRoomAndBookingDay(nameRoom: string, bookingDay: string): Observable<BookingRoom[]> {
    return this.httpClient.get<BookingRoom[]>(this.API_URL_ALL_ROOM_BOOKING_DAY + '?nameRoom=' + nameRoom + '&bookingDay=' + bookingDay);
  }
  findAllTypeAndBookingDay(nameType: string, bookingDay: string): Observable<BookingRoom[]> {
    return this.httpClient.get<BookingRoom[]>(this.API_URL_ALL_TYPE_BOOKING_DAY + '?nameType=' + nameType + '&bookingDay=' + bookingDay);
  }
  findAllRoomTypeBookingDay(nameRoom: string, nameType: string, bookingDay: string): Observable<BookingRoom[]> {
    return this.httpClient.get<BookingRoom[]>(this.API_URL_ALL_ROOM_TYPE_BOOKING_DAY + '?nameRoom=' + nameRoom + '&nameType=' + nameType + '&bookingDay=' + bookingDay);
  }
}
