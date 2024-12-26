import { MovieDetails } from './MovieDetails'; 

export default class Movie implements MovieDetails {
    readonly id: number;
    readonly name: string;
    readonly price: number;
    readonly author?: string; 
    readonly pages?: number; 
    
    year: number;
    country: string;
    slogan: string;
    genre: string;
    duration: number;

    constructor(
        id: number,
        name: string,
        price: number,
        author: string, 
        year: number,
        country: string,
        slogan: string,
        genre: string,
        duration: number
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.author = author;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genre = genre;
        this.duration = duration;
    }

    displayInfo(): string {
        const hours = Math.floor(this.duration / 60);
        const minutes = this.duration % 60;
        return `
            Название: ${this.name}
            Год: ${this.year}
            Страна: ${this.country}
            Слоган: "${this.slogan}"
            Жанр: ${this.genre}
            Время: ${this.duration} мин / ${hours}:${minutes < 10 ? '0' + minutes : minutes}
            Цена: ${this.price}₽
        `;
    }
}
