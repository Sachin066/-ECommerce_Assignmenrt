import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state,action)=>{// check for already added data
            let currentUser = JSON.parse(atob(localStorage.getItem('currentUser')))
            // console.log('currentuser from localstoragne',currentUser);
            // console.log('payload data',action.payload);
            
            // check for already added data
            const isPresent =  state.items.filter((item)=>item.id === action.payload.id && currentUser.id === item.userId);
            // console.log('ispresent', isPresent);
            // console.log('addto cart called form slice',action.payload);
            
            if(isPresent.length == 0){
                const combined = {
                    ...action.payload,
                    userId: currentUser.id
                }
                console.log('combined data',combined)

                state.items.push(combined)
                // alert('Added to Cart');
                swal("Congratulations!", "Item added to cart", "success")

            }
            else{
                // alert("Already added to cart");
                swal("Sorry!", "Item already added to cart", "error")

            }
        },
        clearCart: (state, action)=>{
            // console.log('clear cart called from slice')
            // state.items = []


            let currentUser = JSON.parse(atob(localStorage.getItem('currentUser')))

            // const othersData = current(state.items.filter((item) => item.userId !== currentUser.id))
            let othersData = [];
            for(let i=0;i<state.items.length;i++){

                let curr = current(state.items[i]);
                
                console.log('current data',curr);
                if(curr.userId !== currentUser.id)
                    othersData.push(curr);
            }
            console.log('other data', (othersData))
            console.log('clear cart called from slice')
            state.items = othersData

        }
    }

})

export const {addToCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;