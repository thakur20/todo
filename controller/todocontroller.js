myToDoApp.controller("ToDoController",  TodoController);
function TodoController() {
  this.removeItem = function(items) {
    var removeItem = this.todos.indexOf(items);
    this.todos.splice(removeItem, 1);

  };
    this.additem = function() {
    this.todos.push({
      item: this.newitem.todoitem,
      assignto: this.newitem.assignto,
      date: this.newitem.date,
      complete: false,
      description: this.newitem.description
    });
      this.newitem.todoitem = "",
      this.newitem.assignto = "",
      this.newitem.date = "",
      this.newitem.description = ""
  };
    this.removeAll = function() {
    this.todos = [];
  };

  this.todos = [{
      item: "Pay Wifi Bill",
      assignto: "Raghav",
      date: new Date("07/20/2017"),
      complete: false,
      description: "Pay WiFi bill for June and July month"

    },
    {
      item: "Deposite Cash",
      assignto: "Kapil",
      date: new Date("05/06/2017"),
      complete: false,
      description: "Deposit Cash in A/C: XXXXXXX, bank: BOI, Account-holder:akshay"
    },
    {
      item: "Improve Login Gui",
      assignto: "sameer",
      date: new Date("07/09/2017"),
      complete: false,
      description: "make the login screen responsive"
    },
    {
      item: "book movie ticket",
      assignto: "Aman",
      date: new Date("06/30/2017"),
      complete: false,
      description: "book four movie ticket for evening show"
    }
  ];

};
