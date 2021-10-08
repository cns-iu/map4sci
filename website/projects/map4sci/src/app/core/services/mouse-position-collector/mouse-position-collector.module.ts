import { DOCUMENT } from '@angular/common';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { fromEvent, Subscription } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';


function collectMousePosition(el: HTMLElement, ga: GoogleAnalyticsService): Subscription {
  const formatData = (event: MouseEvent) => {
    const { clientWidth, clientHeight } = el;
    const { clientX, clientY } = event;
    const points = [clientX, clientY, clientWidth, clientHeight];
    return points.join('_');
  };

  const events = fromEvent<MouseEvent>(el, 'mousemove').pipe(
    throttleTime(1000),
    map(formatData)
  );

  return events.subscribe(data => ga.event('webpage', 'mousemove', data));
}

function mousePositionCollectorInitializationFactory(
  document: Document | null,
  ga: GoogleAnalyticsService
): () => void {
  return () => {
    if (document) {
      collectMousePosition(document.body, ga);
    }
  };
}


@NgModule()
export class MousePositionCollectorModule {
  static forRoot(): ModuleWithProviders<MousePositionCollectorModule> {
    return {
      ngModule: MousePositionCollectorModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: mousePositionCollectorInitializationFactory,
          deps: [DOCUMENT, GoogleAnalyticsService],
          multi: true
        }
      ]
    };
  }
}
