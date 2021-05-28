
export class GroceryItem {
    constructor(
        public name: string, 
        public price: number,
        public quantity: number,
        public quantityUnit: string,
        public purchaseDate?: Date) {
    }
}