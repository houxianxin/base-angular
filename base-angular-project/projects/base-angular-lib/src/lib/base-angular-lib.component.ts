import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-base-angular-lib',
  template: `
    <p>
      base-angular-lib works!
    </p>
  `,
  styles: []
})
export class BaseAngularLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
