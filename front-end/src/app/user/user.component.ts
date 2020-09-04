import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {SocialAuthService} from 'angularx-social-login';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Tempjwtemp} from '../models/tempjwtemp';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  decode = new JwtHelperService();
  tempJwt = new Tempjwtemp();
  accountName = '';
  constructor(private tokenStorage: TokenStorageService,
              private socialAuthService: SocialAuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.tempJwt = this.decode.decodeToken(this.tokenStorage.getToken());
    this.accountName = this.tempJwt.sub;
  }

  getBg(): string {
    return 'url(\'https://cdn.hipwallpaper.com/i/76/78/UeGbja.jpg\')';
  }

  signOut(): void {
    this.tokenStorage.signOut();
    this.socialAuthService.signOut();
    // window.location.reload();
    this.router.navigate(['/']);
  }
}
