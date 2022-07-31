import create from 'zustand'

/** steps to follow: 
 * 
 * 1.  declare an empty object which will hold product details and quantity will be added  
 * 2.  declare a const which will use find method on cart and will return a single object associated with the required product is  only if the cart contains a cartItem with the id similar to the product id
 * 3.  if the product exists 
 *      3.1 : then increment quantity by 1  
 *      3.2:  copy all the required properties  
 * 4:  else 
 *      4.1 : set cartIem equals to product + quantity =1
 * 5.  update the global cart
 *      5.1: get existing cart details 
 *      5.2: save the reference of updatedCart cart by spreading existing cart and adding cartItem
 *      5.3: set 
 */ 








export const useGlobalState = create((set,get) => ({
    cart: [],
    addItemToCart: (product) => {
        const existingCart=get().cart;
        let cartItem = {...product, quantity:1};
        const existingItem = existingCart.find((item)=>item._id==product._id)
        if(existingItem){
            cartItem={
                ...cartItem,
                quantity:existingItem.quantity+1
            }
            
            
            const updatedCartItem=existingCart.map((item)=>{
                if(item._id===product._id){
                    return {
                        ...cartItem
                    }
                }else{
                    return item
                }
            })

            set({
                cart:[...updatedCartItem]
            })

        }else{
            cartItem = {...product,quantity:1}
            const updatedItem =[...existingCart,cartItem]
            set({
                cart:[...updatedItem]
            })
        }

        
    }
,

    removeItemFromCart: (productId)=>{
    const existingCart = get().cart ;
    let productAdded={
        _id:productId
    }  
    const existingProduct = existingCart.filter((item) => item._id !== productAdded._id)
    set({
                cart : [...existingProduct]
        })

    },

    incrementQuantityItem: (product)=>{
    const existingCart= get().cart;
    let productAdded={
        ...product
    }

    const incrementQuantity= existingCart.find((item)=> item._id === product._id);
    if(incrementQuantity){
        productAdded={
            ...productAdded,
            quantity:incrementQuantity.quantity+1
        }

        const updatedCart = existingCart.map((item)=>{
            if(item._id===product._id){
                return {
                    ...productAdded
                }
            }else{
                return item
            }
        })

        set({
            cart:[...updatedCart]
        })

    }else{
            const updatedItem =[...existingCart,productAdded]
            set({
                cart:[...updatedItem]
            })
    }
    },

    decrementQuantityItem:(product)=>{
    const existingCart= get().cart;
    let productAdded={
        ...product
    }

    const incrementQuantity= existingCart.find((item)=> item._id === product._id);
    if(incrementQuantity.quantity >= 2){
        productAdded={
            ...productAdded,
            quantity:incrementQuantity.quantity-1
        }
        

        const updatedCart = existingCart.map((item)=>{
            if(item._id===product._id){
                return {
                    ...productAdded
                }
            }else{
                return item
            }
        })

        set({
            cart:[...updatedCart]
        })

    }else {
            const updatedCart= existingCart.filter((item)=>item._id !== incrementQuantity._id)
            set({
                cart:[...updatedCart]
            })
    }
    }

}))

    

/**
 * const arr = [{name:"a",age:7},{name:"b",age:7},{name:"c",age:7},];
 * const Newarr= arr.map((item)=> {if(item.name==="a"){return item.age}})
 * console.log(Newarr)
 *  */  

/**
 * cart=[]
 * cartItem = {
 *     image,
 *     price,
 *     name,
 *     quantity     
 * }
 * cart = [
 * {
 *   image:'',
 *   price: 20,
 *   name: '',
 *   quantity:4 
 * }
 * ]
 * 
 * addToCart(product){
 *      const cartItem = {
 *           name: product.name,
 *           price: product.price,
 *           image: product.image,
 *           quantity: 1
 *      }
 *      const updatedCart = [
 *          ...cart,
 *          cartItem 
 *      ]
 *      setState(cart)
 * }
 * 
 * 
 */     

//  const arr = [{name:"a",age:7},{name:"b",age:7},{name:"c",age:7},];
//   const Newarr= arr.map((item)=> {
//     if(item.name==="a"){
//       return {
//        ...item,
//         age:20
//       }
//     }else {
//         return {
//             ...item
//         }
//     }


// }
  
//   )
//   console.log(Newarr)