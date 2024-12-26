import Buyable from './Buyable';
export interface MovieDetails extends Buyable {
    year: number;
    country: string;
    slogan: string;
    genre: string;
    duration: number;
}