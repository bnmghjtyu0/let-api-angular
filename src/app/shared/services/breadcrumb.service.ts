import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, buffer } from 'rxjs/operators';
import { Breadcrumb } from '../models/breadcrumb';
@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private readonly _breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  constructor(private router: Router, private route: ActivatedRoute) {
    const routerEndEvent$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
    this.router.events.pipe(buffer(routerEndEvent$)).subscribe((event) => {
      const root = this.router.routerState.snapshot.root;
      const breadcrumbs: Breadcrumb[] = [];
      this.addBreadcrumb(root, [], breadcrumbs);

      this._breadcrumbs$.next(breadcrumbs);
    });
  }

  private addBreadcrumb(
    route: ActivatedRouteSnapshot,
    parentUrl: string[],
    breadcrumbs: Breadcrumb[]
  ) {
    if (route) {
      const routeUrl = parentUrl.concat(route.url.map((url) => url.path));

      if (route.data.breadcrumb) {
        console.log(route.data);
        breadcrumbs.push(...route.data.breadcrumb);
      }

      this.addBreadcrumb(route.firstChild!, routeUrl, breadcrumbs);
    }
  }

  private getLabel(data: any) {
    return typeof data.breadcrumb === 'function'
      ? data.breadcrumb(data)
      : data.breadcrumb;
  }
}
