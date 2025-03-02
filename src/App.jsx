import './App.css'
import Navbar from './components/navbar.jsx'
import CarWidget from './components/carWidget.jsx'
import ItemListContainer from './components/itemListContainer.jsx'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <CarWidget></CarWidget>
    <ItemListContainer text='Lugar con los productos recomendados'></ItemListContainer>
    </>
  )
}

export default App
