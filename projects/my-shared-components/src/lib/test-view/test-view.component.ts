import { Component } from '@angular/core';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'lib-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.css'],
})
export class TestViewComponent {
  constructor() {}
  //This injection creates the error
}
