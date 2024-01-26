
import Home from './Pages/Home/Home'
import './App.scss'
import {Routes , Route} from 'react-router-dom'
import Product from './Pages/Home/Product'
import ProductItem2 from './Pages/Home/ProductItem2'
import ProductItem3 from './Pages/Home/ProductItem3'
import ProductItem4 from './Pages/Home/ProductItem4'
import ProductItem5 from './Pages/Home/ProductItem5'

import SideBar from "./components/SideBar/SideBar"
import AboutUs from './Pages/Home/AboutUs'




function App(){
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/tree loan' element={<Product/>}/>
        <Route path='/product/Carbon Program' element={<ProductItem2/>}/>
        <Route path='/product/Carbon foresty leasing' element={<ProductItem3/>}/>
        <Route path='/product/Famers digital monital' element={<ProductItem4/>}/>
        <Route path='/product/agribussiness consulting' element={<ProductItem5/>}/>
        <Route path='/about us' element={<AboutUs/>}/>
      </Routes>

      
      <SideBar/>
    </div>
  )

}

export default App
