import ProductManager from './ProductManager';

// Crea una instancia ProductManager
const ProductManager = new ProductManager('products.json');

// Agregamos un producto
productManager.addProduct({
  title: 'producto de prueba',
  description: 'Este es un peoducto de prueba',
  price: 2000,
  thumbnail: 'Sin imagen',
  code: 'abc123',
  stock: 25
});

// Consultamos los productos
const products = productManager.getProducts();
console.log(products);

// Consultamos un producto por id
const product = productManager.getProductById(1);
console.log(product);

// Actualizamos un producto
productManager.updateProduct(1, { price: 1200, stock: 5 });

// Eliminamos un producto
productManager.deleteProduct(1);

