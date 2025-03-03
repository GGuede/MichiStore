import './App.css'
import Navbar from './components/navbar.jsx'
import ItemListContainer from './components/itemListContainer.jsx'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ItemListContainer text='Lugar con los productos recomendados'></ItemListContainer>
    </>
  )
}

export default App
