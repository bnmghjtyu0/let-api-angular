import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, ROUTES, Routes } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { brRoute } from 'src/app/sales-br-route';
import { bkRoute } from 'src/app/sales-bk-route';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule],
  providers: [
    {
      provide: ROUTES,
      useFactory: configBookHandlerRoutes,
      deps: [AuthService],
      multi: true,
    },
  ],
})
export class BookHandlerModule {}

export function configBookHandlerRoutes(authService: AuthService) {
  let routes: Routes = [];
  if (authService.isAuthorized() === 'BR') {
    routes = brRoute;
  }
  if (authService.isAuthorized() === 'BK') {
    routes = bkRoute;
  }
  return routes;
}
