class ProductManager {
  constructor() {
    this.products = [];
    this.productId = 1;
  }

  addProduct(product) {
    
    if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
      console.log("Error: Todos los campos son obligatorios.");
      return;
    }

    
    const isHere = this.products.find(p => p.code === product.code);
    if (isHere) {
      console.log("Error: El producto ya existe.");
      return;
    }

    product.id = this.productId++;
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find(p => p.id === id);
    if (!product) {
      console.log("Error: Producto no existe.");
    }
    return product;
  }
}
