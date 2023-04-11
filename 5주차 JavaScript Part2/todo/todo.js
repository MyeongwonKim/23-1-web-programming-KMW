import TodoItem from "./item.js";

const todoList = {
  items: [],

  add(title, dueDate) {
    const item = new TodoItem(title, dueDate);
    this.items.push(item);
    this.save();
    return item;
  },

  remove(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.save();
    }
  },

  toggleComplete(item) {
    item.toggleComplete();
    this.save();
  },

  save() {
    localStorage.setItem("todoList", JSON.stringify(this.items));
  },

  load() {
    const items = localStorage.getItem("todoList");
    if (items) {
      this.items = JSON.parse(items);
    }
  },
};

export { todoList };
