import {useState, useEffect} from 'react'
import {Link} from "react-router-dom"

function Products({cart, setCart}) {
   const [products, setProducts] = useState([])
   const handleCart=(product)=>{
      let newCart=cart
      let newProduct=product
      console.log(cart)
      const itemIndex=cart.findIndex(item=>{
        item.id===product.id
      })
      if (itemIndex>-1){
        newCart[itemIndex].quantity++
      } else {
        newProduct.quantity=1
        newCart.push(newProduct)
      }
       setCart(newCart)
   }
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
       <Link to="/cart">view cart</Link>
       {
        // here - there should be a way to view product details (button, page, something)
         products.map((product) => {
           return (
             <>
             <div key={product.id}>
               <h4>Name: {product.title}</h4> 
               <p>Product Description: {product.description}</p> 
               <p>Price: {`$${product.price}`} </p>
               <p>Rating: {product.rating.rate}</p>
               <img src={product.image} height={100} width={85} />
               <button onClick={()=>{handleCart(product)}}>add to cart</button>


             </div>
          
             </>
           )
         })}
     </div>
   )
    
   
}

export default Products
