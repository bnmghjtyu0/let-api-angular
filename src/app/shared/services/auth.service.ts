import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export type ReaderRole = 'BK' | 'BR' | '';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authorized$: Observable<ReaderRole>;
  private authorizedSource: BehaviorSubject<ReaderRole>;
  constructor(private router: Router) {
    this.authorizedSource = new BehaviorSubject<ReaderRole>('');
    this.authorized$ = this.authorizedSource.asObservable();
  }

  public isAuthorized(): any {
    if (!sessionStorage.getItem('auth')) {
      return '';
    }
    if (sessionStorage.getItem('auth') === 'BR') {
      return 'BR';
    }
    if (sessionStorage.getItem('auth') === 'BK') {
      return 'BK';
    }
  }

  public setAuthorized(value: ReaderRole): void {
    const previous = this.authorizedSource.value;
    this.authorizedSource.next(value);

    if (previous === this.authorizedSource.value) {
      return;
    }

    // 為什麼要刪掉 house ? Because of that when we navigate again to the “/books” path, the method “configBookHandlerRoutes” used by the useFactory provider will be executed
    const i = this.router.config.findIndex((x) => x.path === 'house');
    this.router.config.splice(i, 1);

    //因為萬用路由必須在最後一個位置，所以改用插入的方式
    this.router.config.splice(this.router.config.length - 1, 0, {
      path: 'house',
      loadChildren: () =>
        import('../modules/book-handler/book-handler.module').then(
          (mod) => mod.BookHandlerModule
        ),
    });
  }
}
