export class BookingRoom {

  idBooking: number;
  bookingDate: Date;
  startDay: Date;
  endDay: Date;
  startTime: Date;
  endTime: Date;
  descriptionMeeting: string;
  deleteFlag: boolean;
  bookingStatus: string;
  typeMeeting: string;
  room: string;
  user: string;

  constructor() {
  }
}
