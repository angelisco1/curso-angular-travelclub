import { trigger, transition, style, query, animate, group, animateChild, keyframes } from '@angular/animations';
import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations/route-animation';
import { VendehumosService } from './services/vendehumos.service';
import { VendeHumos } from './types/vendehumos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({position: 'relative'}),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({
            opacity: 0
          })
        ], { optional: true }),
        query(':leave', [
          style({
            opacity: 1
          })
        ], { optional: true }),
        group([
          query(':leave', [
            animate('2000ms ease-out', keyframes([
              style({opacity: 1, offset: 0}),
              style({opacity: 0, offset: 0.4}),
            ]))
          ], { optional: true }),
          query(':enter', [
            animate('2000ms ease-out', keyframes([
              style({opacity: 0, offset: 0.5}),
              style({opacity: 1, offset: 1}),
            ]))
          ], { optional: true }),
        ])
      ])
    ])
  ]
})
export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  ngOnInit() {
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot.data?.['animation']
  }
}
