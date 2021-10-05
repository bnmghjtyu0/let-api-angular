import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, of, from } from 'rxjs';
import {
  switchMap,
  debounceTime,
  distinctUntilChanged,
  catchError,
  map,
  filter,
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
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.optsCrm$ = this.form.inputCrm.valueChanges.pipe(
      distinctUntilChanged(), //和上一筆資料不同才會變更
      debounceTime(1000), //輸入資料後，等 1 秒才會 call api
      switchMap((value) => this.getAPI(value)), //取得 API 資料
      catchError((err) => {
        return of([]); //API 錯誤時，選單列清空
      })
    );
  }
  public errorHandling = (control: string, error: string) => {
    return this.queryForm.controls[control].hasError(error);
  };
  private getAPI(value: string) {
    return of([
      {
        singer: 'a 周杰倫',
        id: 1,
      },
      {
        singer: 'b 林依晨',
        id: 2,
      },
    ]).pipe(map((res) => res.filter((x) => x.singer.indexOf(value) >= 0)));
  }

  // onSelected 後在 input 上顯示
  displayFn(opt: any): string {
    console.log(opt);
    return opt && opt.singer ? opt.singer : '';
  }

  // (optionSelected)="onSelectionChange($event)"
  // onSelectionChange(event: MatAutocompleteSelectedEvent) {
  //   console.log(event.option.value);
  // }
}
