import { Select, Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../ngxs/state/app.state';
import {
  AddUsers,
  DeleteUsers,
  GetUsers,
  UpdateUsers,
} from '../ngxs/actions/app.actions';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'let-api-angular';
  userInfo: any = [];
  userForm!: FormGroup;
  //這裡使用 @Select 定義 state
  @Select(AppState.selectStateData) userInfo$!: Observable<any>;
  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.register();
    this.store.dispatch(new GetUsers());
    this.userInfo$.subscribe((returnData) => {
      this.userInfo = returnData;
    });
  }

  register() {
    this.userForm = this.fb.group({
      id: [''],
      name: [''],
      username: [''],
      email: [''],
      phone: [''],
      website: [''],
    });
  }
  addUser() {
    this.store.dispatch(new AddUsers(this.userForm.value));
    this.userForm.reset();
  }
  updateUser(id: number, i: number) {
    const newData = {
      id: id,
      name: 'Siddhesh Thipse',
      username: 'iamsid2399',
      email: 'siddheshthipse09@gmail.com',
      phone: '02138-280044',
      website: 'samplewebsite.com',
    };

    this.store.dispatch(new UpdateUsers(newData, id, i));
  }

  deleteUser(i: number) {
    this.store.dispatch(new DeleteUsers(i));
  }
}
