import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/Pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import ProductCard from '../customer/components/Product/ProductCard'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetail from '../customer/components/Order/OrderDetail'

const CustomerRouters = () => {
    return (
        <div>
            <div>
                <Navigation />
            </div>

            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
                <Route path='/product/:productId' element={<ProductDetails/>}></Route>
                <Route path='/checkout' element={<Checkout/>}></Route>
                <Route path='/account/order' element={<Order/>}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetail/>}></Route>
              
                
                {/* <Product/> */}
                {/* <ProductDetails/> */}
                {/* <Cart/> */}
                {/* <Checkout/> */} 
                {/* <Order/> */}
                {/* <OrderDetail /> */}
            </Routes>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default CustomerRouters