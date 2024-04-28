import { createContext } from "react";

function calculateTotalPrice(cartList) {
    return cartList.map((item) => item.quantity * item.price
    ).reduce((a, b) => {
      return a + b;
    }, 0);
  }

export const cartInit =  {
    cartList: [],
     total: 0
  };

export const cartReducer = (state, action) => {
    const cartList = [...state.cartList];
    //#1.先取得當前購物車目標品項的索引
    const index = cartList.findIndex((item) => item.id === action.payload.id)

    switch (action.type) {
      case 'ADD_TO_CART':
        if (index === -1) {
          //還未加入到購物車內
          cartList.push(action.payload)
        } else {
          //當前購物車的項目與加入的項目一致
          cartList[index].quantity += action.payload.quantity;
        }
        // const array = cartList.map((item)=>{
        //   return item.quantity * item.price
        // });
        // const total = array.reduce((a,b)=>{
        //   return a+b;
        // },0)
        return {
          ...state,
          cartList,
          total:calculateTotalPrice(cartList)
        };
      case 'CHANGE_CART_QUANTITY':
        cartList[index].quantity = action.payload.quantity;
        return {
          ...state,
          cartList,
          total:calculateTotalPrice(cartList)
        };
      case 'REMOVE_CART_ITEM':
        cartList.splice(index, 1);
        return {
          ...state,
          cartList,
          total:calculateTotalPrice(cartList)
        };
      default:
        return state
    }
  }

export const CartContent = createContext({})