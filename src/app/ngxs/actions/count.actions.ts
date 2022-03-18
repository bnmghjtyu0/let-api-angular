//Here we define four actions for CRUD operations respectively

//Read
export class GetCount {
  static readonly type = '[Count] Fetch';
}

//Create
export class AddCount {
  static readonly type = '[Count] Add';
  constructor() { }
}

