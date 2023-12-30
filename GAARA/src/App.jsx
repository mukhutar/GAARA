
import Home from './Pages/Home/Home'
import './App.scss'
import {Routes , Route} from 'react-router-dom'
import Product from './Pages/Home/Product'
import ProductItem2 from './Pages/Home/ProductItem2'
import ProductItem3 from './Pages/Home/ProductItem3'
import ProductItem4 from './Pages/Home/ProductItem4'
import SideBar from "./components/SideBar/SideBar"




function App(){
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/tree loan' element={<Product/>}/>
        <Route path='/product/Carbon Program' element={<ProductItem2/>}/>
        <Route path='/product/Carbon foresty leasing' element={<ProductItem3/>}/>
        <Route path='/product/Famers digital monital' element={<ProductItem4/>}/>

      </Routes>

      
      <SideBar/>
    </div>
  )

}

export default App
