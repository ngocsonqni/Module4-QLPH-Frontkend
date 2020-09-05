import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  test: string;

  constructor(private route: Router) {
    const navigation = this.route.getCurrentNavigation().extras.state as {
      id: string,
      begin: string,
      end: string,
      asset: string,
    };
    this.test = navigation.id + '\n' + navigation.begin + '\n' + navigation.end + '\n' + navigation.asset;
    console.log(this.test);
  }

  ngOnInit(): void {
  }

}
