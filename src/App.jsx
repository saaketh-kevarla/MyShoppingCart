import { useState,createContext } from 'react'
import  Header  from './components/Header'
import ContentBody from './components/ContentBody'

export const ItemsContext = createContext();

function App() {
  const [selectedItems,setSelectedItems] = useState([])

  return (
    <>
      <ItemsContext value = {{selectedItems,setSelectedItems}}>
        <Header />
        <ContentBody />
      </ItemsContext>
    </>
  )
}

export default App
