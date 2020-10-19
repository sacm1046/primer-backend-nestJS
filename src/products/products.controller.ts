import { Body, Controller, Get, Param, Post, Patch, Delete } from "@nestjs/common";
import { ProductService } from "./propduct.service";

@Controller('products')
export class ProductsController {

    constructor(private readonly producService: ProductService){}

    @Post()
    addProduct(
        @Body('title') productTitle: string,
        @Body('description') productDescription: string,
        @Body('price') productPrice: number
        ){
        const newProduct = this.producService.insertProduct(productTitle, productDescription, productPrice);
        return newProduct;
    }

    @Get()
    getAllProducts(){
        return this.producService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id') productId: string){
        return this.producService.getProduct(productId);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') productId: string,
        @Body('title') productTitle: string,
        @Body('description') productDescription: string,
        @Body('price') productPrice: number
        ){
        return this.producService.updateProduct(
            productId,
            productTitle,
            productDescription,
            productPrice
        )
    }

    @Delete(':id')
    deleteProduct(@Param('id') productId: string){
        return this.producService.deleteProduct(productId);
    }
       

}