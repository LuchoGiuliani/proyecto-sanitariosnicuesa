const { readFileSync, writeFileSync, unlinkSync, unlink } = require('fs')
const { resolve,  } = require('path')

module.exports = {

    index: function () {
        let file = resolve(__dirname, '../data', 'products.json') // levanta DB
        let data = readFileSync(file) // convierte a JS
        return JSON.parse(data) //exporta
    },


    find: function (id) {
        let file = resolve(__dirname, '../data', 'products.json')
        let data = readFileSync(file)
        let products = JSON.parse(data);
        return products.find(product => product.id == id)
    },


    filter: function (filterType, value) {
        let file = resolve(__dirname, '../data', 'products.json')
        let data = readFileSync(file)
        let products = JSON.parse(data);
        let filteredList
        // console.log(filterType + " " + value)

        // let filter = products.filter(product => product.name.toLowerCase().indexOf(subcategoria.toLowerCase()) > -1)
        
        if (filterType == "categoria") {
            filteredList = products.filter(product => product.categoria == value)
        }

        if (filterType == "subCategoria") {
            filteredList = products.filter(product => product.subCategoria == value)
        }
        
        else if (filterType == "search") {
            filteredList = products.filter(product => product.name.toLowerCase().includes(value) || product.marca.toLowerCase().includes(value))
            if (value == "" || null) { filteredList = [] }
        }

        return filteredList
    },


    write: function (data) {
        let file = resolve(__dirname, '../data', 'products.json');
        let info = JSON.stringify(data, null, 2);
        return writeFileSync(file, info);
    },


    create: function (data) {
        let file = resolve(__dirname, '../data', 'products.json');
        let info = readFileSync(file);
        let products = JSON.parse(info);
        let lastProduct = products[products.length - 1];
        return Object({
            id: products.length == 0 ? 1 : parseInt(lastProduct.id) + 1,
            name: data.nombreProducto,
            price: parseInt(data.price),
            imagen: data.imagenProducto,
            categoria: data.categoria,
            subCategoria: data.subCategoria,
            marca: data.marca,
            information: {
                colores: data.colores,
                linea: data.linea,
                modelo: data.modelo,
                diseño: data.design,
                configuracion: data.configuracion,
                apto: data.apto,
                tecnologia: data.tecnologia,
                medidas: data.medidas,
                capacidad: data.capacidad,
            },
            details: {
                description: data.descripcion,
                documento: data.documento,
                esquema: data.esquema,
            }
        })
    },


    edit: function (data, productoOriginal) {
        // let file = resolve(__dirname, '../data', 'products.json');
        // let info = readFileSync(file);
        let imagen = data.imagenProducto

        console.log("id es: " + productoOriginal.id)
        return Object({
            id: productoOriginal.id,
            name: data.nombreProducto,
            price: parseInt(data.price),
            imagen: imagen,
            categoria: productoOriginal.categoria,
            subCategoria: productoOriginal.subCategoria,
            marca: data.marca,
            information: {
                colores: data.colores,
                linea: data.linea,
                modelo: data.modelo,
                diseño: data.design,
                configuracion: data.configuracion,
                apto: data.apto,
                tecnologia: data.tecnologia,
                medidas: data.medidas,
                capacidad: data.capacidad,
            },
            details: {
                description: data.description,
                documento: data.documento,
                esquema: data.esquema,
            }
        })
    },

    deleteImage: function (file) {
       
        try {
            let route = resolve(__dirname, "../../public/images/productos/", file)
            return unlinkSync(route)
           
        } catch (error) {
            console.log(error);
        }
    }
 }
