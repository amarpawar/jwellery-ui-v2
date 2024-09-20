export class Product {
    name: string;
    thumbnailUrl: string;
    price: number;
    rating: number;

    constructor(name: string, thumbnailUrl: string, price: number, rating: number = 0) {
        this.name = name;
        this.thumbnailUrl = thumbnailUrl;
        this.price = price;
        this.rating = rating;
    }
}