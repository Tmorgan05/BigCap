import {useState, useEffect} from 'react'

function Products() {
   const [products, setProducts] = useState([])

   useEffect(() => {
     const getAllData = async () => {
       try {
         const response = await fetch('https://fakestoreapi.com/products')
         const results = await response.json()
         console.log(results, "this is the result of something")
        setProducts(results)
       } catch (err) {
         console.error(err)
       }
     }
     getAllData()
   }, [])
 /* products : [ 
   product : { 
   key : value
   title:  'hello'
 category: "men's clothing"
 description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
 id: 1,
 image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
 }
 ]
 
 */
   return (
     <div>
       <p>Fake Store Products</p>
       {
         products.map((product) => {
           return (
             <>
             <div key={product.id}>
               <h4>Name: {product.title}</h4>
               <p>Product Description: {product.description}</p>
               <p>Price: {`$${product.price}`} </p>
               <p>Rating: {product.rating.rate}</p>
               <img src={product.image} height={150} width={200} />
             </div>
          
             </>
           )
         })}
     </div>
   )
    
   
}

export default Products
