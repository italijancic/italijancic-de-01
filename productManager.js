class ProductManager {

  constructor() {
    this.products = []
  }

  addProduct = (title, description, price, thumbnail, code, stock) => {

    // Validate required args
    if(!title || !description || !price || !thumbnail || !code || !stock){
      console.log('Required fields not found')
      return
    }

    // Validate product code not repeat
    if (this.products.find((product) => product.code === code)) {
      console.log('Product code already exist')
      return
    }

    const product = {
      id: this.#getMaxId() + 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    }

    this.products.push(product)
  }

  getProducts = () => {
    return this.products
  }

  getproductById = (productId) => {
    const foundedProduct = this.products.find((product) => product.id === productId)
    if (foundedProduct)
      return foundedProduct
    else
      console.log('Not found')
  }

  #getMaxId = () => {
    let maxId = 0
    this.products.map((event) => {
      if (event.id > maxId) maxId = event.id
    })
    return maxId
  }

}


// Testing proccess

// Class instace creation
const productManager = new ProductManager()
console.log(productManager.getProducts())

// Test addProduct() method
productManager.addProduct('producto prueba', 'Este es uin producto de prueba', 200, 'Sin imagen', 'abcd123', 25)
console.log(productManager.getProducts())

// Test product code validation on addMethod()
productManager.addProduct('producto prueba', 'Este es uin producto de prueba', 200, 'Sin imagen', 'abcd123', 25)

// Test validation of required fields
// Empty name
productManager.addProduct('Este es un producto de prueba 2', 300, 'Sin imagen 2', 'KDMVN78JKDSN', 765)
// Empty description
productManager.addProduct('priducto de prueba 2', 300, 'Sin imagen 2', 'KDMVN78JKDSN', 765)
// Empty price
productManager.addProduct('priducto de prueba 2','Este es un producto de prueba 2', 'Sin imagen 2', 'KDMVN78JKDSN', 765)
// Empty thumbnail
productManager.addProduct('priducto de prueba 2','Este es un producto de prueba 2', 300, 'KDMVN78JKDSN', 765)
// Empty code
productManager.addProduct('priducto de prueba 2','Este es un producto de prueba 2', 300, 'Sin imagen 2', 765)
// Empty stock
productManager.addProduct('priducto de prueba 2','Este es un producto de prueba 2', 300, 'Sin imagen 2', 'KDMVN78JKDSN')

// Test getProductById() method
console.log(productManager.getproductById(1))
productManager.getproductById(10)

console.log(productManager.getProducts())
