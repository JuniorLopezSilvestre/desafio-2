const Manager = require('./manager.js')
const manager = new Manager()

let product = {
    title: "Lavadora",
    From: "Peru",
    cost: "125$",
    stock: 11,
    resgistro_sanitario: "13sa"
}

//manager.createProduct(product).then(result => console.log(result))
 //manager.findAll().then(result => console.log(result))
// manager.findById(2).then(result => console.log(result))
// manager.updateProduct(3, product).then(result => console.log(result))
 //manager.deleteProduct(3).then(result => console.log(result))