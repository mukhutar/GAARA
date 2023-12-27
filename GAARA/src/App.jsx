
import Home from './Pages/Home/Home'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Product from './Pages/Home/Product'
import ProductItem2 from './Pages/Home/ProductItem2'
import ProductItem3 from './Pages/Home/ProductIem3'



function App(){
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/tree loan' element={<Product/>}/>
        <Route path='/product/Carbon Program' element={<ProductItem2/>}/>
        <Route path='/product/Carbon foresty leasing' element={<ProductItem3/>}/>

      </Routes>
    </div>
  )

}

export default App
