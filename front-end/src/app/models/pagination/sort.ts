export class Sort {
  sorted: boolean;
  unsorted: boolean;
}

export class MySort {
  active: string;
  direction: string;


  constructor(active: string, direction: string) {
    this.active = active;
    this.direction = direction;
  }
}
