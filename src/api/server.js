import { createServer, Model } from 'miragejs'
import Photo from '../../public/photo.svg'

export function makeServer() {
  createServer({

    models: {
      product: Model,
    },

    routes() {
      this.namespace = "api"

      this.get("/products", (schema, request) => {
        return schema.products.all()
      })

      this.get("/products/:id", (schema, request) => {
        let id = request.params.id
        return schema.movies.find(id)
      })

      this.post("/products", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        return schema.products.create(attrs)
      })

      this.patch ("/products", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        let id = Number(attrs.id)
        return (schema.products.find(id).update(attrs))
      })
    },

    seeds(server) {
      server.create("product", {               
        id: 1,
        image: Photo,
        name: "Maça",
        code: "MLB123456",
        sales: 30,
        price: 2,
        stock: 3,
        favorite: true })

      server.create("product", {               
        id: 2,
        name: "Pera",
        image: Photo,
        code: "MLB123456",
        sales: 50,
        price: 3,
        stock: 3,
        favorite: false })

      server.create("product", {               
        id: 3,
        name: "Uva",
        image: Photo,
        code: "MLB123456",
        sales: 60,
        price: 1,
        stock: 3,
        favorite: false })

      server.create("product", {               
        id: 4,
        name: "Banana",
        image: Photo,
        code: "MLB123456",
        sales: 30,
        price: 1,
        stock: 3,
        favorite: false })

      server.create("product", {               
        id: 5,
        name: "Kiwi",
        image: Photo,
        code: "MLB123456",
        sales: 15,
        price: 2,
        stock: 3,
        favorite: false })

      server.create("product", {               
        id: 6,
        name: "Pessego",
        image: Photo,
        code: "MLB123456",
        sales: 10,
        price: 5,
        stock: 3,
        favorite: false })

      server.create("product", {               
        id: 7,
        name: "Morango",
        image: Photo,
        code: "MLB123456",
        sales: 30,
        price: 2,
        stock: 3,
        favorite: true })

      server.create("product", {               
        id: 8,
        name: "Goiaba",
        image: Photo,
        code: "MLB123456",
        sales: 20,
        price: 2,
        stock: 3,
        favorite: false })
    },
  })

}