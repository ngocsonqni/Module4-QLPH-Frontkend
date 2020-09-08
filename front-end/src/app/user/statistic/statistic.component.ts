import { Component, OnInit } from '@angular/core';
import {StatisticService} from '../../services/statistic.service';
import {BookingRoom} from '../../models/booking-room';
import {Room} from '../../models/room';
import {TypeRoom} from '../../models/type-room';
declare var $: any;
@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

  bookingRooms: BookingRoom[];
  rooms: Room[];
  typeRooms: TypeRoom[];
  index = 0;
  roomValueDefault = '';
  typeValueDefault = '';
  bookingDayValueDefault = '';
  startValue = '';
  endValue = '';

  constructor(private statisticService: StatisticService) { }

  ngOnInit(): void {
    this.getAllRoom();
    this.getAllType();
  }
  searchAllRoom(nameRoom: string): void{
    console.log(this.roomValueDefault);
    this.findAllRoom(nameRoom);
  }
  searchAllType(nameType: string): void{
    this.findAllType(nameType);
  }
  searchAllTypeAndRoom(nameRoom: string, nameType: string): void{
    this.findAllTypeAndRoom(nameRoom, nameType);
  }
  searchAllBookingDay(bookingDay: string): void{
    const newDate = new Date(bookingDay);
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const dateStr = year + '-' + month + '-' + date;
    this.findAllBookingDay(dateStr);
  }
  searchAllRoomAndBookingDay(nameRoom: string, bookingDay: string): void{
    const newDate = new Date(bookingDay);
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const dateStr = year + '-' + month + '-' + date;
    this.findAllRoomAndBookingDay(nameRoom, dateStr);
  }
  searchAllTypeAndBookingDay(nameType: string, bookingDay: string): void{
    const newDate = new Date(bookingDay);
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const dateStr = year + '-' + month + '-' + date;
    this.findAllTypeAndBookingDay(nameType, dateStr);
  }
  searchAllRoomTypeBookingDay(nameRoom: string, nameType: string, bookingDay: string): void{
    const newDate = new Date(bookingDay);
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const dateStr = year + '-' + month + '-' + date;
    this.findAllRoomTypeBookingDay(nameRoom, nameType, dateStr);
  }
  private findAllRoom(nameRoom: string): void {
    this.statisticService.findAllRoom(nameRoom).subscribe(
      next => this.bookingRooms = next,
      error => {
        this.bookingRooms = [];
        console.log(error);
      });
  }
  private findAllType(nameType: string): void {
    this.statisticService.findAllType(nameType).subscribe(
      next => this.bookingRooms = next,
      error => {
        this.bookingRooms = [];
        console.log(error);
      });
  }
  private findAllTypeAndRoom(nameRoom: string, nameType: string): void {
    this.statisticService.findAllTypeAndRoom(nameRoom, nameType).subscribe(
      next => this.bookingRooms = next,
      error => {
        this.bookingRooms = [];
        console.log(error);
      });
  }
  private findAllBookingDay(bookingDay: string): void {
    this.statisticService.findAllBookingDay(bookingDay).subscribe(
      next => this.bookingRooms = next,
      error => {
        this.bookingRooms = [];
        console.log(error);
      });
  }
  private findAllRoomAndBookingDay(nameRoom: string, bookingDay: string): void {
    this.statisticService.findAllRoomAndBookingDay(nameRoom, bookingDay).subscribe(
      next => this.bookingRooms = next,
      error => {
        this.bookingRooms = [];
        console.log(error);
      });
  }
  private findAllTypeAndBookingDay(nameType: string, bookingDay: string): void {
    this.statisticService.findAllTypeAndBookingDay(nameType, bookingDay).subscribe(
      next => this.bookingRooms = next,
      error => {
        this.bookingRooms = [];
        console.log(error);
      });
  }
  private findAllRoomTypeBookingDay(nameRoom: string, nameType: string, bookingDay: string): void {
    this.statisticService.findAllRoomTypeBookingDay(nameRoom, nameType, bookingDay).subscribe(
      next => this.bookingRooms = next,
      error => {
        this.bookingRooms = [];
        console.log(error);
      });
  }
  statisticRoom(nameRoom: string, nameType: string, bookingDay: string): void{
    const FIND_ROOM = nameRoom !== '' && nameType === '' && bookingDay === '';
    const FIND_TYPE = nameRoom === '' && nameType !== '' && bookingDay === '';
    const FIND_BOOKING = nameRoom === '' && nameType === '' && bookingDay !== '';
    const FIND_ROOM_TYPE = nameRoom !== '' && nameType !== '' && bookingDay === '';
    const FIND_ROOM_BOOKING = nameRoom !== '' && nameType === '' && bookingDay !== '';
    const FIND_TYPE_BOOKING = nameRoom === '' && nameType !== '' && bookingDay !== '';
    const FIND_ROOM_TYPE_BOOKING = nameRoom !== '' && nameType !== '' && bookingDay !== '';
    switch (true) {
      case FIND_ROOM :
        this.searchAllRoom(nameRoom);
        break;
      case FIND_TYPE :
        this.searchAllType(nameType);
        break;
      case FIND_BOOKING :
        this.searchAllBookingDay(bookingDay);
        break;
      case FIND_ROOM_TYPE :
        this.searchAllTypeAndRoom(nameRoom, nameType);
        break;
      case FIND_ROOM_BOOKING :
        this.searchAllRoomAndBookingDay(nameRoom, bookingDay);
        break;
      case FIND_TYPE_BOOKING :
        this.searchAllTypeAndBookingDay(nameType, bookingDay);
        break;
      case FIND_ROOM_TYPE_BOOKING :
        this.searchAllRoomTypeBookingDay(nameRoom, nameType, bookingDay);
        break;
    }
  }
  private findAllStartAndEnd(startDay: string, endDay: string): void {
    this.statisticService.findAllStartAndEnd(startDay, endDay).subscribe(
      next => this.bookingRooms = next,
      error => {
        this.bookingRooms = [];
        console.log(error);
      });
  }
  private findAllStart(startDay: string): void {
    this.statisticService.findAllStart(startDay).subscribe(
      next => this.bookingRooms = next,
      error => {
        this.bookingRooms = [];
        console.log(error);
      });
  }
  private findAllEnd(endDay: string): void {
    this.statisticService.findAllEnd(endDay).subscribe(
      next => this.bookingRooms = next,
      error => {
        this.bookingRooms = [];
        console.log(error);
      });
  }
  statisticTime(startDay: string, endDay: string): void{
    const FIND_START = startDay !== '' && endDay === '';
    const FIND_END = startDay === '' && endDay !== '';
    const FIND_START_END = startDay !== '' && endDay !== '';

    switch (true) {
      case FIND_START :
        this.searchAllStart(startDay);
        break;
      case FIND_END :
        this.searchAllEnd(endDay);
        break;
      case FIND_START_END :
        this.searchAllStartAndEnd(startDay, endDay);
        break;
    }
  }
  searchAllStartAndEnd(startDay: string, endDay: string): void{
    const startDay1 = new Date(startDay);
    const date1 = startDay1.getDate();
    const month1 = startDay1.getMonth() + 1;
    const year1 = startDay1.getFullYear();
    const dateStr1 = year1 + '-' + month1 + '-' + date1;
    const endDay1 = new Date(endDay);
    const date2 = endDay1.getDate();
    const month2 = endDay1.getMonth() + 1;
    const year2 = endDay1.getFullYear();
    const dateStr2 = year2 + '-' + month2 + '-' + date2;
    this.findAllStartAndEnd(dateStr1, dateStr2);
  }
  searchAllStart(startDay: string): void{
    const startDay1 = new Date(startDay);
    const date1 = startDay1.getDate();
    const month1 = startDay1.getMonth() + 1;
    const year1 = startDay1.getFullYear();
    const dateStr1 = year1 + '-' + month1 + '-' + date1;
    this.findAllStart(dateStr1);
  }
  searchAllEnd(endDay: string): void{
    const endDay1 = new Date(endDay);
    const date2 = endDay1.getDate();
    const month2 = endDay1.getMonth() + 1;
    const year2 = endDay1.getFullYear();
    const dateStr2 = year2 + '-' + month2 + '-' + date2;
    this.findAllEnd(dateStr2);
  }
  private getAllRoom(): void {
    this.statisticService.findAllListRoom().subscribe(data => {
      this.rooms = data;
    });
  }
  private getAllType(): void {
    this.statisticService.findAllListType().subscribe(data => {
      this.typeRooms = data;
    });
  }
}
