import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Links } from './Linking';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { Home } from './Home';
import { Recruite } from './Recruite';
import { Update } from './Update';
import { Short } from './Short';
const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Links/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/new' exact element={<Recruite/>}/>
          <Route path='/edit/:data' exact element={<Update/>}/>
          <Route path='/short' exact element={<Short/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;