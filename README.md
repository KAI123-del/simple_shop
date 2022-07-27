import create from 'zustand'

/**
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
        let cartItem = {
            name: product.name,
            image:product.image,
            price:product.price,
            _id: product._id
        };
        const existingItem = existingCart.find((item)=>item._id===product._id)
        
        if(existingItem){
            console.log("existing")
            cartItem = {
                ...cartItem,
                quantity: existingItem.quantity+1
            }
            const updatedCartItems=existingCart.map(item=> {
                if(item._id===product._id){
                    return {
                        ...cartItem
                    }
                }
                else {
                    return item
                }
            })
            set({
                cart: [...updatedCartItems]
            })
        }else{
            cartItem = {...cartItem,quantity:1}
            const updatedCart = [...existingCart,cartItem]
            console.log("adding")
            set({
                cart:[...updatedCart]
            })
        }

        
    }}))

           

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

