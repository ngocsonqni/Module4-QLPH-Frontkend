import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Role} from '../../models/role';
import {AdminService} from '../../services/admin/admin.service';
import {ToastrService} from 'ngx-toastr';
import {Member} from '../../models/member';
import * as $ from 'jquery';
import {MaterialModule} from '../../shares/material.module';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  providers: [MaterialModule]
})
export class CreateUserComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  validation_messages = {
    fullName: [
      {type: 'required', message: 'Yêu Cầu Nhập Họ Tên'},
      {type: 'minlength', message: 'Họ Tên Cần Có Ít Nhất 5 Ký Tự '},
      {type: 'maxlength', message: 'Họ Tên Không Dài Quá 50 Ký Tự'},
      {type: 'pattern', message: 'Xin Hãy Bỏ Khoảng Trống'}
    ],
    username: [
      {type: 'required', message: 'Yêu Cầu Nhập Tên Đăng Nhập'},
      {type: 'minlength', message: 'Tên Đăng Nhập Cần Có Ít Nhất 5 Ký Tự'},
      {type: 'maxlength', message: 'Tên Đăng Nhập  Không Dài Quá 25 Ký Tự'},
      {type: 'pattern', message: 'Xin Hãy Bỏ Khoảng Trống'}

    ],
    position: [
      {type: 'required', message: 'Yêu Cầu Nhập Bộ Phận'},
      {type: 'minlength', message: 'Bộ Phận Cần Có Ít Nhất 5 Ký Tự'},
      {type: 'maxlength', message: 'Bộ Phận  Không Dài Quá 25 Ký Tự'},
    ],
    role: [
      {type: 'required', message: 'Yêu Cầu Chọn Quyền'},
    ],
    password: [
      {type: 'required', message: 'Yêu Cầu Nhập Mật Khẩu'},
      {type: 'minlength', message: 'Mật khẩu Cần Có Ít Nhất 6 Ký Tự'},
    ],
  };
  form: any;
  hide = true;
  roleList: Role[];
  memberList: Member[];
  member: Member;
  registerForm: FormGroup;

  constructor(private adminService: AdminService,
              private toastrService: ToastrService,
              private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.createFormRegister();
    // this.adminService.findAllRole().subscribe(next => {
    //   this.roleList = next;
    // }, error => {
    //   console.log(error);
    // });
  }

  // tslint:disable-next-line:typedef
  createFormRegister() {
    this.registerForm = this.fb.group({
      fullName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(5),
        Validators.pattern(/^\S+.*\S+$/)
      ])),
      username: new FormControl('', Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(5),
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9\\,\\.\\-\\_\\@]{1,}$/)
      ])),
      position: new FormControl('', Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(5),
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      role: new FormControl('', Validators.required
      )
    });
  }

  create(): void {
    console.log(this.registerForm);
    if (this.registerForm.valid) {
      this.adminService.create(this.registerForm.value).subscribe(data => {
          $('#edit-em').click();
          // this.registerForm.reset();
          this.toastrService.success('Thêm mới nhân viên thành công');
          console.log(data);
        },
        error => {
          $('#edit-em').click();
          console.log('aaaaaaaa', error);
          this.toastrService.warning('Tên đăng nhập không đúng hoặc đã tồn tại');
        });
    }
  }
}
