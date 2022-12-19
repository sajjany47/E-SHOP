import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Flex } from '@chakra-ui/react'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen';
import JweleryScreen from './screens/JweleryScreen'
import MensScreen from './screens/MensScreen'
import SortScreen from './screens/SortScreen'
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen'; 
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen'
const App=()=>{
  return(
    <BrowserRouter>
      <Header/>
      <Flex as='main'
            mt='72px'
            direction='column'
            minH='xl'
            py='6'
            px='6'
            pl='40px'
            bgColor='white'>
              <Routes>
                    <Route path='/' element={<HomeScreen/>}/>
                    <Route path='/product/:id' element={<ProductScreen></ProductScreen>}/>
                    <Route path='/cart/:id' element={<CartScreen />} />
                    <Route path='/cart' element={<CartScreen />} />
                    <Route path='/login' element={<LoginScreen />} />
                    <Route path='/jwelery' element={<JweleryScreen/>}/>
                    <Route path='/mens' element={<MensScreen/>}/>
                    <Route path='/sort' element={<SortScreen/>}/>
                    <Route path='/shipping' element={<ShippingScreen />} />
                    <Route path='/payment' element={<PaymentScreen />} />
                    <Route path='/placeorder' element={<PlaceOrderScreen />} />
                    <Route path='/order' element={<OrderScreen/>}/>

              </Routes>

      </Flex>
    </BrowserRouter>
  )
}
export default App