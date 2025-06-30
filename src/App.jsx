import { useState } from 'react'
import  Header  from './components/Header'
import ContentBody from './components/ContentBody'


function App() {
  const [selectedItems,setSelectedItems] = useState([])

  return (
    <>
      <Header selectedItems = {selectedItems}></Header>
      <ContentBody setSelectedItems = {setSelectedItems} selectedItems = {selectedItems}></ContentBody>
    </>
  )
}

export default App
