import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of, from } from 'rxjs';
import {
  switchMap,
  debounceTime,
  distinctUntilChanged,
  catchError,
  map,
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  optsCrm$!: Observable<any>;
  queryForm: FormGroup = this.fb.group({
    inputCrm: [''],
  });

  get form() {
    return this.queryForm.controls;
  }
  constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.optsCrm$ = this.form.inputCrm.valueChanges.pipe(
      distinctUntilChanged(), //和上一筆資料不同才會變更
      debounceTime(1000), //輸入資料後，等 1 秒才會 call api
      switchMap((value) => this.getAPI(value)), //取得 API 資料
      catchError((err) => {
        console.error(err);
        return of([]); //API 錯誤時，選單列清空
      })
    );
  }
  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter((option) =>
  //     option.toLowerCase().includes(filterValue)
  //   );
  // }

  public errorHandling = (control: string, error: string) => {
    return this.queryForm.controls[control].hasError(error);
  };
  private getAPI(value: string) {
    return this.httpClient
      .get<any>(
        'https://content.guardianapis.com/search?q=debates&api-key=test'
      )
      .pipe(
        map((x) => x.response.results),
        map((res: any) => {
          return res.filter((x: any) => x.sectionName.indexOf(value) >= 0);
        })
      );
  }

  // onSelected 後在 input 上顯示
  displayFn(opt: any): string {
    return opt && opt.sectionName ? opt.sectionName : '';
  }

  // (optionSelected)="onSelectionChange($event)"
  // onSelectionChange(event: MatAutocompleteSelectedEvent) {
  //   console.log(event.option.value);
  // }
}
