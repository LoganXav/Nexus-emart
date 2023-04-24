import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Home from "./pages/home/Home"
import Shop from "./pages/shop/Shop"
import Product from "./pages/product/Product"
import Wishlist from "./pages/wishlist/Wishlist"
import Cart from "./pages/Cart/Cart"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import './App.css'


const Layout = () => {                       
  return(
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: '/wishlist',
        element: <Wishlist />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ]
  }
])


function App() {

  return (      
    <div>
    <RouterProvider router = {router} />
    </div>
  )
}

export default App
