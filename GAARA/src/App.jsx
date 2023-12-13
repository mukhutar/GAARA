
import Home from './Pages/Home/Home'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Product from './Pages/Home/Product'



function App(){
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  )

}

export default App
