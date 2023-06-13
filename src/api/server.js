import { createServer } from "miragejs"

export function makeServer() {
  createServer({
    routes() {
      this.namespace = "/api"

      this.get("/products", () => [
        { 
          id: "1", 
          name: "Apple",
          code: "MLB123456",
          sales: 30,
          price: 2,
          stock: 100,
          favorite: true,
          image: 'https://teravirt.s3-accelerate.amazonaws.com/uploads/sites/95/2021/06/MACA-IMPORTADA.jpg'
        },
        { 
          id: "2", 
          name: "Orange",
          code: "MLX123446",
          sales: 50,
          price: 1.5,
          stock: 200,
          favorite: false,
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/800px-Orange-Fruit-Pieces.jpg'
        },
        { 
          id: "3", 
          name: "Grape",
          code: "MLB123456",
          sales: 30,
          price: 2,
          stock: 3,
          favorite: true,
          image: 'https://media.guiame.com.br/archives/2015/10/15/1427125018-uva.jpg'
        },
        { 
          id: "4", 
          name: "Pineapple",
          code: "MLB123456",
          sales: 30,
          price: 2,
          stock: 3,
          favorite: true,
          image: 'https://www.healthxchange.sg/sites/hexassets/Assets/food-nutrition/pineapple-health-benefits-and-ways-to-enjoy.jpg'
        },
        { 
          id: "5", 
          name: "Banana",
          code: "MLB123456",
          sales: 30,
          price: 2,
          stock: 3,
          favorite: true,
          image: 'https://www.bernardaoemcasa.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/c/cc143e3f49d34923320905e1a3837768.jpg'
        },
        { 
          id: "6", 
          name: "Watermelon",
          code: "MLB123456",
          sales: 30,
          price: 2,
          stock: 3,
          favorite: true,
          image: 'https://i5.walmartimages.com/asr/e2ec527d-fe7b-4309-9373-186de34557cf.1c562d1a69a2a8f4cb7b5de8f125fc76.jpeg'
        },
        { 
          id: "7", 
          name: "Passion Fruit",
          code: "MLB123456",
          sales: 30,
          price: 2,
          stock: 3,
          favorite: true,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9TUeiZ5tD1VAQj1QmOrVz-DaWjA9QHTb0iQ&usqp=CAU'
        },
        { 
          id: "8", 
          name: "Coconut",
          code: "MLB123456",
          sales: 30,
          price: 2,
          stock: 3,
          favorite: true,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeWXwNu6CNe-sLjQowxdKVPx6oDugMhpqKBw&usqp=CAU'
        },
      ])
      
    },
  })
}