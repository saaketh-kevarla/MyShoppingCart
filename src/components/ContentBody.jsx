import {styled} from 'styled-components'
import { itemsArray } from '../Data';
import { createContext, useContext } from 'react';
import { ItemsContext } from '../App';
import Cards from './Cards';

const StyleDiv = styled.div`
border : 3px solid rebeccapurple;
padding : 0 14vw;

& .title{
    margin-top : 8vh;
}

& #carddiv  {
    //border : 2px solid black;
    display : grid;
    grid-template-columns : repeat(3,1fr);
    grid-auto-rows : 90vh;
    gap : 2vw;
}

`

export const CardsContext = createContext();

export default function ContentBody(){

    const {selectedItems,setSelectedItems} = useContext(ItemsContext);
    

    return (
        <>
        <StyleDiv>
            <h3 className='title'>ELEGANT CLOTHING FOR EVERYONE</h3>
            <div id = 'carddiv'>
                {/* <Cards product={item.product} cost = {item.cost} description = {item.Description} key={index} image={item.src} setSelectedItems = {setSelectedItems} selectedItems = {selectedItems}/> */}
                {itemsArray.map((item,index) => {
                    const cardVal = {
                        product : item.product,
                        cost : item.cost,
                        description : item.Description,
                        image : item.src,
                        selectedItems,
                        setSelectedItems
                    }
    

                    return <CardsContext value={cardVal} key={index} >
                                <Cards />
                            </CardsContext>})}
            </div>
        </StyleDiv>  
        </>
    )
}