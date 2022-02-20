import { Injectable } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';
import { Room } from './form';
@Injectable({ providedIn: 'root' })
export class RoomOver18Validator {
  public onlyAccessRoomsOver18(minAge: number): ValidatorFn {
    return (formGroup: any) => {
      // const ageControl = formGroup.controls.age;
      // const roomControl = formGroup.controls.room;

      // if (!ageControl || !roomControl) {
      //   return null;
      // }

      // const ageValue = ageControl.value;

      // if (!ageValue) {
      //   return null;
      // }

      // if (ageValue >= 18) {
      //   return null;
      // }

      // if (ageValue >= minAge) {
      //   return null;
      // }

      // const roomsValue = roomControl.value as Room;

      // if (!roomsValue) {
      //   return null;
      // }

      // if (roomsValue.value === 'room-2' || roomsValue.value === 'room-3') {
      //   return { roomOnlyWith18: true }; // This is our error!
      // }

      return null;
    };
  }
}
