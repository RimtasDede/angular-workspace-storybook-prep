import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-animal',
  template: `
    <p>
      animal works!
    </p>
  `,
  styles: [
  ]
})
export class AnimalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
