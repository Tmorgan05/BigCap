
export default function Cart({cart, setCart}) {
    
    
    return(<>
    
    
    <h1>User Cart Stuff</h1>
    
    {cart.map((item, key)=>{
     return(<div key={key}>
        {item.productName}
     </div>)

    })}
    </>)
    
}