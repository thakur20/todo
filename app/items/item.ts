module app.domain {
  export interface ITodoitem {
    item: string;
    date: Date;
    assignTo: string;
    complete: boolean;
    description: string;

  }
  export class Item implements ITodoitem {
    constructor(public item: string,
      public date: Date,
      public assignTo: string,
      public complete: boolean,
      public description: string) {

    }

  }
}
