import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  handleClick(data: any, loadNextApi: (data: any) => void): void {
    loadNextApi(data);
  }
}
