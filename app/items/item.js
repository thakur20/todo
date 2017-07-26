var app;
(function (app) {
    var domain;
    (function (domain) {
        var Item = (function () {
            function Item(item, date, assignTo, complete, description) {
                this.item = item;
                this.date = date;
                this.assignTo = assignTo;
                this.complete = complete;
                this.description = description;
            }
            return Item;
        }());
        domain.Item = Item;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
