import React,{ useEffect, useReducer, useContext } from "react";
import reducer from "./Reducer";


const url = 'https://course-api.com/react-useReducer-cart-project';
const dataContext = React.createContext(); 

const ACTION = {
    loading: false,
    cart: [],
    total: 0,
    amount:0,
}


function AppProvider({children}) {
    const [state, dispatch] = useReducer(reducer, ACTION );


    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }
    const remove = (id) => {
        dispatch({ type: 'REMOVE', payload: id })
    }
    const fetchData = async () =>  {
        dispatch({ type: 'LOADING' });
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          const cart = await response.json();
          dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
        } catch (error) {
          // Handle any errors, such as network errors or failed JSON parsing
          console.error("Error fetching data:", error);
        }
    } 
    const fluctQuant = (id, type) => {
        dispatch({ type: 'TOGGLE_AMOUNT', 
    payload: { id, type}})
    }
    
    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        dispatch({ type: 'GET_TOTALS'})
    }, [state.cart])

    return (
        <dataContext.Provider 
        value={{
            ...state, clearCart,remove, fluctQuant
        }} >
            {children}

        </dataContext.Provider>
        
    )
    
}

export const useGlobalContext = () => {
    return useContext(dataContext);
}

export default AppProvider;

