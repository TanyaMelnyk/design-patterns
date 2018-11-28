const TAX = 20;
const DISCOUNT = 5;

class Basket {
    constructor () {
        this.productList = [];
    }

    addItem (productListItem) {
        this.productList.push(productListItem);
        this.productList.forEach(item => console.log(`${item.product} - ${item.totalPriceWithTax()}$`));
    }

    getTotalCost () {
        let totalPrice = this.productList.reduce((total, item) => {
            return total + item.totalPriceWithTax();
        }, 0);
        console.log(`Total: ${totalPrice}$`);
        return totalPrice;
    }

    discount () {
        if (this.getTotalCost() > 500) {
            let price = this.getTotalCost();
            let priceWithDiscount = price - price*DISCOUNT/100;
            console.log(`You have a discount 5%, total sum: ${priceWithDiscount}$`);
            return priceWithDiscount;
        };
    }
}

class Product {
    constructor (productName, productPrice) {
        this.product = productName;
        this.price = productPrice;
    }
    totalPriceWithTax() {
        return this.price + this.price*TAX/100;
    }

}

class Books {
    constructor (bookName, bookPrice, author) {
        this.bookName = bookName;
        this.price = bookPrice;
        this.author = author;
    }
}

class BookAdapter {
    constructor (book) {
        this.product = `'${book.bookName}' ${book.author}`;
        this.price = book.price;
    }
    totalPriceWithTax() {
        return this.price + this.price*TAX/100;
    }
}


let cartProd = new Basket();
cartProd.addItem(new Product('TV', 500));
cartProd.addItem(new BookAdapter(new Books('It', 100, 'King')));
cartProd.getTotalCost();
cartProd.discount();

