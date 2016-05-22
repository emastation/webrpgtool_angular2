import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component, provide } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { APP_BASE_HREF } from '@angular/common';
import { LoginButtons } from 'angular2-meteor-accounts-ui';
import { SiteTopComponent } from './imports/site-top/site-top.component';


@RouteConfig([
  {
    path: '/',
    as: 'SiteTop',
    component: SiteTopComponent,
    useAsDefault: true
  }
])
@Component({
  selector: 'app',
  templateUrl: 'client/app.component.html',
  directives: [ROUTER_DIRECTIVES, LoginButtons],
  styleUrls: ['client/app.component.css']
})
class AppComponent { }

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, { useValue: '/' })
]);
