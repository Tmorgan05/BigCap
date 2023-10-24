
import { useNavigate } from "react-router-dom";
// in this component, you will need to check if the user is authenticated or not - only authenticated useres should be able to add to cart 
export default function Cart({cart, setCart}) {

    const navigate=useNavigate()
    const handleClick=()=>{
        setCart([])
        navigate ("/checkoutcomplete")
    }
    // here, the parameter should be event, not product. 
    // need to parse the event object to get the information we want
    const qtyM=(product)=>{
      console.log(product, "product")
      // why are we copying the cart object?
      // in react, we **should not** directly manipulate the state - we should make a copy, manipulate that, and then use setCart to update the state value. 
      let newCart = [...cart]
         console.log(newCart, "new cart")
         console.log(cart, "cart")

        // our cart is an array - the best way to access items inside an array is using index because an array maintains its order. 
        const itemIndex=cart.findIndex(item=> 
          item.id===product.id                 
        )
        console.log(itemIndex, "item index")
        //there are two possible cases: 
        // case 1: we have two or more products in our cart  
        // case 2: we have one product in our cart
        //case 1 - we are only changing the quantity property on the product - it stays in the cart 
        if (product.quantity >1){
            newCart[itemIndex].quantity--
            
        // case 2 - once we reduce the quantity, we now have 0 of this product in our cart - we need to remove it entirely. 
        } else {
            newCart.splice(itemIndex, 1)
        }
        // finally, we update the state
         setCart(newCart)
    }
    const qtyP=(product)=>{
      console.log("product", product)
        let newCart = [...cart]
        const itemIndex=cart.findIndex(item=>
          item.id===product.id
        )  
          console.log(itemIndex, "itemd")
          console.log("cart", cart)
          console.log("new cart", newCart)
      
        newCart[itemIndex].quantity++

         setCart(newCart)
        }
    const remove=(product)=>{
      let newCart = [...cart]
        const itemIndex=cart.findIndex(item=>{
          item.id===product.id
        })
        newCart.splice(itemIndex, 1)
        alert(itemIndex)

         setCart(newCart)
    }
    
    return(<>
    
    
    <h1>User Cart Stuff</h1>
    
    {cart.map((product, key)=>{
     return(<div key={product.id}>
        <h4>Name: {product.title}</h4> 
        <p>Price: {`$${product.price}`} </p>
        <img src={product.image} height={150} width={200} />

        <div>Quantity: {product.quantity}</div>
        {/* these onClicks are event handlers, so we cannot directly access the product in this way  */}
        {/* event handlers usually look like this: onClick = {(event) => qtyM(event, product)} 
        Now you have access to the event and the product information. 
        */}

        <div>
          {/* Add a value property on each button. Something like value={product.quantity-1} (for the - button). 
          This way, you can access the desired quantity of the product using event.target.value to set the new quantity  */}
          <button onClick={()=>qtyM(product)}>-</button>
          <button onClick={()=>qtyP(product)}>+</button></div>
        <div><button onClick={()=>remove(product)}>remove item</button></div>
      </div>
     


    )})}

    

    
    <button onClick={handleClick}>Check Out</button>

    

    </>)
    
}