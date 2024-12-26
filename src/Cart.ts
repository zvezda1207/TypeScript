import Buyable from "./Buyable";
export default class Cart {
    private items: Buyable [] = [];
    add(item: Buyable): void {
        this.items.push(item);
    }

    getAll(): Buyable [] {
        return [...this.items];
    }

    // Метод для подсчета суммарной стоимости без учета скидки
    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0)
    }
    // Метод для подсчета суммарной стоимости с учетом скидки
    getTotalPriceWithDiscount(discount: number): number {
        const totalWithoutDiscount = this.getTotalPrice();
        const discountAmount = (totalWithoutDiscount * discount) / 100;
        return totalWithoutDiscount - discountAmount;
    }

     // Метод для удаления элемента из корзины по id
     removeById(itemId: number): void {
        this.items = this.items.filter(item => item.id !== itemId)
     }
}