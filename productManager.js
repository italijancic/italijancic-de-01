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
      code,
      title,
      description,
      price,
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

const productManager = new ProductManager()

productManager.addProduct('title1','description1', 100, '/img/product1.jpg', 'A678N45H', 1000)
// Testing repeat product code
productManager.addProduct('title2','description2', 200, '/img/product2.jpg', 'A678N45H', 2000)
productManager.addProduct('title2','description2', 200, '/img/product2.jpg', 'LM876N49', 2000)
productManager.addProduct('title3','description3', 300, '/img/product3.jpg', 'LMN76HGC', 3000)
productManager.addProduct('title4','description4', 400, '/img/product4.jpg', 'MK764HNJ', 4000)

console.log(productManager.getProducts())

// Test method to get product by id
console.log(productManager.getproductById(2))

// Testing validation of required fields
productManager.addProduct('description1', 400, '/img/product1.jpg', 'MK764HNJ', 4000)
productManager.addProduct('title1', 100, '/img/product1.jpg', 'A678N45H', 1000)
productManager.addProduct('title1','description1','/img/product1.jpg', 'A678N45H', 1000)
productManager.addProduct('title1','description1', 100, 'A678N45H', 1000)
productManager.addProduct('title1','description1', 100, '/img/product1.jpg', 1000)
productManager.addProduct('title1','description1', 100, '/img/product1.jpg', 'A678N45H')

