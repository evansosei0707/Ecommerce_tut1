import React from 'react';
import CartItems from './CartItems';
import { useGlobalContext } from './context';

const CartContainer = () => { 
    const { cart, total, clearCart } = useGlobalContext();

  return (
     <section className='cart'>
        {cart.length &&  (
            <>
                <header>
                    <h2>your bag</h2>
                </header>
                <main>
                    {cart.map((cartItem) => {
                        return <CartItems key={cartItem.id} {...cartItem} />
                    })}
                </main>
                <footer>
                    <hr />
                    <div className='cart-total'>
                        <h4>
                            total <span>${total}</span>
                        </h4>
                    </div>
                    <button className='btn clear-btn' onClick={clearCart}>
                        clear cart
                    </button>
                </footer>
            </>
        )

        }
        {!cart.length && (
            <header>
                <h2>your bag</h2>
                <h4 className='empty-cart'>
                    is currently empty
                </h4>
            </header>
        )}
     </section>
  )
}

export default CartContainer