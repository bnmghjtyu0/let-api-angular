import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MediaQueryService implements OnDestroy {
  obob: any;
  destroyed = new Subject<void>();
  mediaQuery: string = '';
  screenDirect: string = '';

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'media-xs'],
    [Breakpoints.Small, 'media-sm'],
    [Breakpoints.Medium, 'media-md'],
    [Breakpoints.Large, 'media-lg'],
    [Breakpoints.XLarge, 'media-xl'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    this.obob = breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]);

    this.obob.pipe(takeUntil(this.destroyed)).subscribe((result: any) => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          // console.log(this.displayNameMap.get(query));
          this.mediaQuery = this.displayNameMap.get(query) ?? 'Unknown';
        }
      }
    });

    const layoutChanges = breakpointObserver.observe([
      '(orientation: portrait)',
      '(orientation: landscape)',
    ]);
    layoutChanges.subscribe((result) => {
      if (result.breakpoints['(orientation: portrait)']) {
        this.screenDirect = 'portrait';
      }
      if (result.breakpoints['(orientation: landscape)']) {
        this.screenDirect = 'landscape';
      }
    });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
