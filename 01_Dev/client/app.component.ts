import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';

@Component({
  selector: 'app',
  templateUrl: 'client/app.component.html'
})
class AppComponent { }

bootstrap(AppComponent);
