import Cart from '../Cart';
import { MovieDetails } from '../MovieDetails'; 
import Buyable from '../Buyable';

const mockMovie: MovieDetails = {
    id: 1,
    name: 'Movie Title',
    price: 1000,
    year: 2020,
    country: 'USA',
    slogan: 'Best Movie Ever',
    genre: 'Action',
    duration: 120,
};

const mockBook: Buyable = {
    id: 2,
    name: 'Book Title',
    price: 500,
    author: 'Author Name',
    pages: 300
};

describe('Cart', () => {
    let cart: Cart;

    beforeEach(() => {
        cart = new Cart();
    });

    test('should add an item to the cart', () => {
        cart.add(mockBook);
        expect(cart.getAll().length).toBe(1);
    });

    test('should calculate total price correctly', () => {
        cart.add(mockBook);
        cart.add(mockMovie);
        expect(cart.getTotalPrice()).toBe(1500);
    });

    test('should calculate total price with discount correctly', () => {
        cart.add(mockBook);
        cart.add(mockMovie);
        expect(cart.getTotalPriceWithDiscount(20)).toBe(1200);
    });

    test('should remove an item by id', () => {
        cart.add(mockBook);
        cart.add(mockMovie);
        cart.removeById(1);
        expect(cart.getAll().length).toBe(1);
        expect(cart.getAll()[0].id).toBe(2); // В корзине остался только Book
    });

    test('should not remove an item if id does not exist', () => {
        cart.add(mockBook);
        cart.removeById(999); // Попытка удалить несуществующий id
        expect(cart.getAll().length).toBe(1); // Количество товаров не изменится
    });
});