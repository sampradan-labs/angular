export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;

  constructor(values: Object = {}) {
    //Assigns the values supplied in parameter
    // to the current instance (this)
    //Similar to writing
    //this = values;
    Object.assign(this, values);
  }
}
