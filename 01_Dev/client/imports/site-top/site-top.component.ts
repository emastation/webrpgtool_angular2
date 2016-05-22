import { Component } from '@angular/core';
import { GameSubmitComponent } from './game-submit.component';

@Component({
  selector: 'site-top',
  templateUrl: 'client/imports/site-top/site-top.component.html',
  directives: [GameSubmitComponent]
})
export class SiteTopComponent {
}
