import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {SocialAuthService} from 'angularx-social-login';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  constructor(private tokenStorage: TokenStorageService,
              private socialAuthService: SocialAuthService) {
  }

  ngOnInit(): void {}

  getBg(): string {
    return 'url(\'https://cdn.hipwallpaper.com/i/76/78/UeGbja.jpg\')';
  }

  signOut(): void {
    this.tokenStorage.signOut();
    this.socialAuthService.signOut();
    window.location.reload();
  }
}
