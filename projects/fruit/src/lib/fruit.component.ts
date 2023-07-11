import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-fruit',
  template: `
    <p>
      fruit works!
    </p>
  `,
  styles: [
  ]
})
export class FruitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
