import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  test: string;
  id: string;
  begin: string;
  end: string;
  asset: string;

  constructor(private route: Router) {
    const navigation = this.route.getCurrentNavigation().extras.state as {
      id: string,
      begin: string,
      end: string,
      asset: string,
    };
    this.id = navigation.id;
    this.begin = navigation.begin;
    this.end = navigation.end;
    this.asset = navigation.asset;
    console.log(this.test);
  }

  ngOnInit(): void {
  }

}
