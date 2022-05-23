import Buyable from '../domain/Buyable';
export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
    getSum(): number {
     return this._items.reduce(function(sum, elem) {
        return sum + elem.price;
      }, 0);
    }
    getSumWithAmount(amount: number): number {
      return this.getSum() * (amount/100);
    }
    deleteItem(id:number): void {
      this._items = this._items.filter(elem => elem.id !== id)
    }
}
