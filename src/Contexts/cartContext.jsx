import { createContext, useState } from "react";

export const cartContext = createContext({
    cartItems: [],
    updateCart : () => {},
})

export default function CartContextProvider({children})
{
    const [cart, setCart] = useState([])

    const cartContextValue = {
        cartItems: cart,
        updateCart: setCart,
    }
    return(
        <>
        <cartContext.Provider value={cartContextValue}>
            {children}
        </cartContext.Provider>
        </>
    )
}