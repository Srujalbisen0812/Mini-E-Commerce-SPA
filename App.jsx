import React, { useState } from 'react'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'

export default function App() {

  const products = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Smart Watch", price: 5000 }
  ]

  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (index) => {
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Mini E-Commerce Store</h1>
      <h3>Cart Items: {cart.length}</h3>

      <ProductList products={products} addToCart={addToCart} />

      <Cart cart={cart} removeFromCart={removeFromCart} total={total} />
    </div>
  )
}
