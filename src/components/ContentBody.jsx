import {styled} from 'styled-components'
import { itemsArray } from '../Data';
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

export default function ContentBody({selectedItems,setSelectedItems}){
    return (
        <>
        <StyleDiv>
            <h3 className='title'>ELEGANT CLOTHING FOR EVERYONE</h3>
            <div id = 'carddiv'>
                {itemsArray.map((item,index) => <Cards product={item.product} cost = {item.cost} description = {item.Description} key={index} image={item.src} setSelectedItems = {setSelectedItems} selectedItems = {selectedItems}/>)}
            </div>
        </StyleDiv>  
        </>
    )
}