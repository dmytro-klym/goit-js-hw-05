class Storage {
   constructor(arr) {
      this.items = arr;
   }
   getItems() {
      return this.items;
   }
   addItem(item) {
      return this.items.push(items);
   }
   removeItem(item) {
      for (let i = 0; i < this.items.length; i += 1) {
         console.log(this.items[i]);
         if (this.items[i] === item) {
            return this.items.splice(i, 1);
         }
      }
   }
}

const storage = new Storage([
   "Нанітоіди",
   "Пролонгер",
   "Залізні жупи",
   "Антигравітатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem("Дроїд");
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]