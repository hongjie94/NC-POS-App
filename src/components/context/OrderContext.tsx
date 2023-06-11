import React, { createContext, useReducer } from 'react';
import chineseMenuData from '../../assets/data/chineseMenu.json';
import thaiMenuData from '../../assets/data/thaiMenu.json';


interface State {
  category: string;
  menu: string;
  menuItems: any[];
  currentCart: [];
  allOrders: [{
    totalPrice: number;
    orderNum : number;
    orderItems: [{
      itemName: String,
      itemNum: String,
      quantity: Number,
      price: Number,
      size: String | null
    }]
  }] | [];
}

interface orderAction {
  type: string,
  payload: string;
}

export interface ContextProps {
  className?: string;
}

const initialState: State = {
  category:"Appetizers",
  menu:"chineseMenu",
  menuItems: chineseMenuData.filter((item, i)=> {
    return item.category === "Appetizers"
  }),
  currentCart: [],
  allOrders: []
};

const ItemReducer = (state:State, action: orderAction) =>{
  
  let curItem;
  switch (action.type) {
    case "setCategory":
      if(state.menu === "chineseMenu") {
        curItem = chineseMenuData.filter((item, i)=> {
          return item.category === action.payload
        })
      }else {
        curItem = thaiMenuData.filter((item, i)=> {
          return item.category === action.payload
        })
      }
      return {category: action.payload, menu:state.menu, menuItems: curItem};

    case "setMenu":
      if(action.payload === "chineseMenu") {
        curItem = chineseMenuData.filter((item, i)=> {
          return item.category === "Appetizers"
        })
        return {menu: action.payload, category: "Appetizers", menuItems: curItem};
      }else {
        curItem = thaiMenuData.filter((item, i)=> {
          return item.category === "Soups"
        })
        return {menu: action.payload, category: "Soups", menuItems: curItem};
      }
      
    case "setItems":
     
      console.log("ELSE",action.payload)
      console.log("ELSE2", state.currentCart)
    
      return {currentCart : action.payload};
      
    default:
      return state;
  }
}

export const OrderContext = createContext<{
  state: State,
  dispatch: React.Dispatch<orderAction>
}>({state:initialState, dispatch:() => {}});

interface ProviderProps {
  children: React.ReactNode;
}

export const OrderContextProvider = ({children} : ProviderProps) => {
  const [state, dispatch] = useReducer(ItemReducer, initialState);
  return (
    <OrderContext.Provider value={{state, dispatch}}>
      {children}
    </OrderContext.Provider>
  )
}