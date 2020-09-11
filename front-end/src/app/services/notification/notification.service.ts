import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Notifications} from '../../models/user/notification';
import {Observable} from 'rxjs';
import {User} from '../../models/user/user';
import {Pageable} from '../../models/pagination/pageable';
import {Page} from '../../models/pagination/page';
import {UserNotification} from '../../models/user/user-notification';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  API_URL = 'http://localhost:8080/user/';

  constructor(private httpClient: HttpClient) {
  }

  saveNotification(notification: Notifications, id: number): Observable<void> {
    return this.httpClient.post<void>(this.API_URL + 'notification/' + id + '/save', notification);
  }

  markAsSeenById(id: number): Observable<void> {
    return this.httpClient.get<void>(this.API_URL + 'notification/markSeen/' + id);
  }

  getAll(user: User, pageable: Pageable): Observable<Page<UserNotification>> {
    return this.httpClient.post<Page<UserNotification>>(this.API_URL + 'notification/' + user.id, pageable);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.get<void>(this.API_URL + 'notification/delete/' + id);
  }

  getAllByDeleteFlagIsFalse(id: number): Observable<UserNotification[]> {
    return this.httpClient.get<UserNotification[]>(this.API_URL + 'notification/' + id + '/notSeen');
  }
}
