import { Component } from '@angular/core';

type Insured = {
  name: string;
  gender: string;
  age: string;
  nameErrorMessage: string;
  ageErrorMessage: string;
};

@Component({
  selector: 'name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss'],
})
export class NameEditorComponent {
  insuredList: Insured[] = [
    {
      name: '',
      gender: '',
      age: '',
      nameErrorMessage: '',
      ageErrorMessage: '',
    },
  ];

  // 建立下一筆
  add(): void {
    const insured: Insured = {
      name: '',
      gender: '',
      age: '',
      nameErrorMessage: '',
      ageErrorMessage: '',
    };
    this.insuredList.push(insured);
  }

  // 刪除
  deleteInsured(index: number): void {
    this.insuredList.splice(index, 1);
  }

  trackByIndex(index: number, obj: any) {
    return index;
  }
}
