class ProductManager{
    constructor(){
        this.products = []
        this.productIdCounter = 1
    }

    addProduct(product){
        if(!this.isProductValid(product)){
            console.error("Error: El producto no es válido");
            return
        }

        if(this.isCodeDuplicate(product.code)){
            console.error("Error: El código del producto ya está siendo utilizado");
            return
        }

        product.id = this.productIdCounter++
        this.products.push(product)
    }

    getProducts(){
        return this.products
    }

    getProductById(id){
        const product = this.products.find((p) =>p.id === id)
        if(product){
            return product
        }else{
            console.error("Error: Producto no encontrado");
        }
    }

    isProductValid(product){
        return(
            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock !== undefined
        )
    }

    isCodeDuplicate(code){
        return this.products.some((p) => p.code === code)
    }
}


const productos = new ProductManager

//Agrego productos al array

productos.addProduct({
    title: "Pantalón Jeans",
    description: "Pantalón Jeans",
    price: 20000,
    thumbnail: "/imagenPantalonJeans.jpg",
    code: "P001",
    stock: 10
})

productos.addProduct({
    title: "Pantalón Sastrero",
    description: "Pantalón de vestir sastrero chupin",
    price: 15000,
    thumbnail: "/imagenPantalonSastrero.jpg",
    code: "P002",
    stock: 8
})

productos.addProduct({
    title: "Camisa",
    description: "Camisa estampada",
    price: 12000,
    thumbnail: "/imagenPantalonCamisa.jpg",
    code: "P003",
    stock: 4
})

productos.addProduct({
    title: "Remera",
    description: "Remera de algodón",
    price: 8000,
    thumbnail: "/imagenPantalonRemera.jpg",
    code: "P004",
    stock: 15
})

productos.addProduct({
    title: "Campera",
    description: "Campera de cuero",
    price: 70000,
    thumbnail: "/imagenPantalonCampera.jpg",
    code: "P005",
    stock: 3
})

//Busco obtener productos
/* const productList = productos.getProducts()
console.log(productList); */


//Busco obtener producto por ID
/* const productId = productos.getProductById(4)
console.log(productId); */

//Busco obtener Producto inexistente
//const noProduct = productos.getProductById(8)