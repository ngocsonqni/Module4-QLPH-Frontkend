import { Component, OnInit } from '@angular/core';
import {Member} from '../../models/member';
import {AdminService} from '../../services/admin/admin.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  size = 5;
  pageClicked = 0;
  memberList: Member[];
  pages = [];
  totalPages = 0;
  key = '';
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getAllMemberWithPage(0);
  }
  getAllMemberWithPage(page): void {
    this.adminService.findAllMemberWithPage(page, this.size, this.key).subscribe(
      data => {
        $('.searchInput').focus();
        if (data !== null) {
          this.pageClicked = page;
          this.memberList = data.content;
          this.totalPages = data.totalPages;
          if (this.memberList.length < 6) {
            $('.table').attr('style', 'margin-bottom: ' + ((6 - this.memberList.length) * 30) + 'px');
          } else {
            $('.table').attr('style', 'margin-bottom: 0');
          }
          this.pages = Array.apply(null, {length: this.totalPages}).map(Number.call, Number);
        } else {
          this.memberList = null;
        }
      }, error => console.log(error)
    );
  }
  search(): void {
    this.ngOnInit();
  }
  onPrevious(): void {
    if (this.pageClicked > 0) {
      this.pageClicked--;
      this.getAllMemberWithPage(this.pageClicked);
    }
  }

  onNext(): void {
    if (this.pageClicked < this.totalPages - 1) {
      this.pageClicked++;
      this.getAllMemberWithPage(this.pageClicked);
    }
  }

  onLast(): void {
    this.pageClicked = this.totalPages - 1;
    this.getAllMemberWithPage(this.pageClicked);
  }
}
