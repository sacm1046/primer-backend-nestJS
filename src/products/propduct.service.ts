import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./products.model";

@Injectable()
export class ProductService {
    products: Product[] = [];

    insertProduct(title: string, description: string, price: number) {
        const id = (this.products.length + 1).toString()
        const newProduct = new Product(id, title, description, price);
        this.products.push(newProduct);
        return newProduct;
    }

    getProducts() {
        return [...this.products];
    }

    getProduct(productId: string) {
        const [product] = this.findProduct(productId);
        return { ...product };
    }

    updateProduct(productId: string, title: string, description: string, price: number) {
        const [product, index] = this.findProduct(productId);

        let currentProduct = { ...product };

        if (title){
            currentProduct.title = title
        }
        if (description){
            currentProduct.description = description
        }
        if (price){
            currentProduct.price = price
        }
        this.products[index] = currentProduct;
        return this.products[index];
    }

    deleteProduct(productId: string){
        const [_, index] = this.findProduct(productId);
        this.products.splice(index, 1)
        return this.products;
    }

    private findProduct(producId: string): [Product, number] {
        const productIndex = this.products.findIndex(({ id }) => id === producId);
        const product = this.products[productIndex]
        if (!product) { throw new NotFoundException('Product Not Found') }
        return [product, productIndex];

    }
}