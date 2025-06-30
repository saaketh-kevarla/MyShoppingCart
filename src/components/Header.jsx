import { useRef } from 'react'
import {styled} from 'styled-components'
import { itemsArray } from '../Data';

const StyleDiv = styled.div`
display : flex;
border : 1px solid black;
justify-content : space-between;
align-items : center;


& button {
    height : 50px;
    width : 100px;
    font-size : 20px;
    margin-right : 7vw;
}

& dialog {
    background-color : grey;
    height : 400px;
    width : 800px;

}

& ul {
    list-style-type : none;
    
}

& ul li {
    display : flex;
    align-items : center;
    text-align : start;
    border : 1px solid white;
    height : 5vh;
}

& h3 {
    margin-left : 630px;
}

`


export default function Header({selectedItems}){

    const DialogRef = useRef(null);

    function openDialog(){
        DialogRef.current.showModal();
    }

    function closeDialog(){
        DialogRef.current.close();
    }

    let a ;
    
    return (
        <>
            <StyleDiv>
                <h1>ELEGANT CONTENT</h1>
                <button onClick={openDialog}>Cart({selectedItems.length})</button>
                <dialog ref={DialogRef}>
                    <h1>YOUR CART</h1>
                    <ul>
                    {selectedItems.map((items) => <li>{items.product}</li>)}
                    </ul>
                    <h3>Cart Total : </h3>
                    <button onClick={closeDialog}>Close</button>
                </dialog>
            </StyleDiv>
        </>
    )
}