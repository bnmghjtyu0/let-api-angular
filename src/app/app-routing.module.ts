import { AuthService } from './shared/services/auth.service';
import { BkHomeComponent } from './ui/bk-home/bk-home.component';
import { BrHomeComponent } from './ui/br-home/br-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { LoginComponent } from './ui/login/login.component';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: ROUTES,
      useFactory: configBookHandlerRoutes,
      deps: [AuthService],
      multi: true,
    },
  ],
})
export class AppRoutingModule {}

function configBookHandlerRoutes(authService: AuthService) {
  let routes: Routes = [];
  if (authService.isAuthorized()) {
    routes = [
      { path: 'house', redirectTo: '/house/agentMember', pathMatch: 'full' },
      {
        path: 'house/agentMember',
        component: BrHomeComponent,
      },
    ];
  } else {
    routes = [
      { path: 'house', redirectTo: '/house/agentMember', pathMatch: 'full' },
      {
        path: 'house/agentMember',
        component: BkHomeComponent,
      },
    ];
  }
  return routes;
}
