
import { useNavigate } from "react-router-dom";

export default function Cart({cart, setCart}) {
    const navigate=useNavigate()
    const handleClick=()=>{
        setCart([])
        navigate ("/checkoutcomplete")
    }

    const qtyM=(product)=>{
        let newCart=cart
        const itemIndex=cart.findIndex(item=>{
          item.id===product.id
        })
        if (product.quantity >1){
            newCart[itemIndex].quantity--
        } else {
            newCart.splice(itemIndex, 1)
        }

         setCart(newCart)
    }
    const qtyP=(product)=>{
        let newCart=cart
        const itemIndex=cart.findIndex(item=>{
          item.id===product.id
        })
        newCart[itemIndex].quantity++

         setCart(newCart)
        }
    const remove=(product)=>{
        let newCart=cart
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
        <div><button onClick={(product)=>qtyM(product)}>-</button><button onclick={(product)=>qtyP(product)}>+</button></div>
        <div><button onClick={(product)=>remove(product)}>remove item</button></div>
      </div>
     


    )})}

    

    
    <button onClick={handleClick}>Check Out</button>

    

    </>)
    
}