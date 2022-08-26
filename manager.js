const fs = require('fs')


const pathToFile = './products.json'

class Manager {
    createProduct = async (product) => {
        
        if (!product.title || !product.cost || !product.stock) return {status: "error", message: "missing fields"}
        try {
            if (fs.existsSync(pathToFile)) {
                fs.appendFile
                let data = await fs.promises.readFile(pathToFile, 'utf-8')
                let products = JSON.parse(data)
                let id = products[products.length-1].id+1
                product.id = id
                products.push(product)
                await fs.promises.writeFile(pathToFile, JSON.stringify(products, null, 2))
                return {status: "success", message: "Product created"}
            } else {
                product.id = 1
                await fs.promises.writeFile(pathToFile, JSON.stringify([product], null, 2))
                return {status: "success", message: "Product created"}
            }
        } catch(err) {
            return {status: "error", message: err.message}
        }
    }

    findAll = async () => {
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let products = JSON.parse(data)
            return {status: "success", message: products}
        } else {
            return {status: "error", message: err.message}
        }
    }

    findById = async (id) => {
       
        if (!id) return {status: "error", message: "Id required"}
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let products = JSON.parse(data)
            let product = products.find(product => product.id === id)
            if (product) return {status: "succes", message: product}
            return {status: "error", message: "Product not found"}
        } else {
            return {status: "error", message: err.message}
        }
    }

    updateProduct = async (id, updatedProduct) => {
        
        if (!id) return {status: "error", message: "Id required"}
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let products = JSON.parse(data)
            let newProducts = products.map(product => {
                if (product.id === id) {
                    updatedProduct.id = id
                    return updatedProduct
                } else return product
            })
            await fs.promises.writeFile(pathToFile, JSON.stringify(newProducts, null, 2))
            return {status: "success", message: "Product updated!"}
        } else {
            return {status: "error", message: err.message}
        }        
    }

    deleteProduct = async (id) => {
        
        if (!id) return {status: "error", message: "Id required"}
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            let products = JSON.parse(data)
            let newProducts = products.filter(product => product.id !== id)
            await fs.promises.writeFile(pathToFile, JSON.stringify(newProducts, null, 2))
            return {status: "success", message: "Product deleted!"}
        } else {
            return {status: "error", message: err.message}
        }
    }
}

module.exports = Manager