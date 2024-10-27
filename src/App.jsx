
import './App.css'
// import FoodCard from './Component/FoodCard/FoodCard'
import FoodList from './Component/Foodlist/FoodList'
import Navbar from './Component/Navbar/Navbar'

function App() {


  return (
    <>
  
      <h1 className='text-5xl text-center bg-fuchsia-500'>React_Daisy-UI</h1>
      <Navbar></Navbar>
      {/* <FoodCard></FoodCard> */}
      <FoodList></FoodList>
      
    </>
  )
}

export default App
