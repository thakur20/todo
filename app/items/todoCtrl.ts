module app.todoList {

  import Item = app.domain.ITodoitem;
  import http =  angular;

  interface ITodoListModel {
    items: app.domain.ITodoitem[];
    removeItem(item: Item): void;
    addItem(): void;
    removeAll(): void;
  }

  class ToDoListCtrl implements ITodoListModel {
    items: Item[];
    newItem: Item;

    removeItem(item: Item): void {
      let removeItemIndex = this.items.indexOf(item);
      if (removeItemIndex > -1) {
        this.items.splice(removeItemIndex, 1);
      }
    };

    addItem(): void {
      if (this.items != undefined || this.items != null) {
        this.items.push({
          item: this.newItem.item,
          assignTo: this.newItem.assignTo,
          date: this.newItem.date,
          description: this.newItem.description,
          complete: false
        });
      }
      this.newItem = null;
    };

    removeAll(): void {
      this.items = [];
    }

    constructor($http:angular.IHttpService) {
        $http.get('app/items/data/todo.json').then((res: any)=>{
          this.items = res.data;
        });
    }
  }
  angular
    .module("myToDoApp")
    .controller("ToDoListCtrl", ToDoListCtrl);
}
