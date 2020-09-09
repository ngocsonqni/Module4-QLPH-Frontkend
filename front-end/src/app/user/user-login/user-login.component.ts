import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthLoginInfo} from "../../auth/login-info";
import {AuthJwtService} from "../../auth/auth-jwt.service";
import {TokenStorageService} from "../../auth/token-storage.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  message = '';
  userInfo: AuthLoginInfo;
  constructor(private fb: FormBuilder,
              private auth: AuthJwtService,
              private tokenStorage: TokenStorageService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  onSubmit(): void {
    this.submitted = true;
    this.userInfo = new AuthLoginInfo(this.fusername.value, this.fpassword.value);
    console.log(this.userInfo);
    this.login(this.userInfo);
  }
  get fusername(): AbstractControl {
    return this.loginForm.get('username');
  }

  // tslint:disable-next-line:typedef
  get fpassword(): AbstractControl {
    return this.loginForm.get('password');
  }
  getBg(): string {
    return 'url(\'https://cdn.hipwallpaper.com/i/76/78/UeGbja.jpg\')';
  }

  private login(userInfo: AuthLoginInfo): void {
    console.log(userInfo);
    this.auth.attemptAuth(userInfo).subscribe(
      data => {
        this.tokenStorage.saveAuthorities(data.authorities);
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.accountName);
        sessionStorage.setItem('loggedUser', userInfo.accountName);
        console.log('data', this.tokenStorage.saveUsername(data.accountName));
        console.log('data', data);
        sessionStorage.setItem('loggedUser', userInfo.accountName);
        // sessionStorage.setItem('idUser', data.id);
        // tslint:disable-next-line:triple-equals
        if (this.tokenStorage.getAuthorities().indexOf('ROLE_ADMIN') != -1) {
          this.router.navigate(['/admin']);
        } else if (this.tokenStorage.getAuthorities().indexOf('ROLE_USER') !== -1) {
          this.router.navigate(['/user']);
        }
        console.log('data1', this.tokenStorage.getAuthorities());
        console.log('data', userInfo.accountName);

      },
      error => {
        console.log('Error ', error);
        this.message = 'Tên đăng nhập không tồn tại hoặc sai mật khẩu';
      }
    );
  }
}
