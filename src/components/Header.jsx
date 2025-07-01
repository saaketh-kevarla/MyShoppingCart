import { useRef } from 'react'
import {styled} from 'styled-components'


const StyleDiv = styled.div`
display : flex;
border : 1px solid black;
justify-content : space-between;
align-items : center;


& .cart-button{
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
    //justify-content : space-between;
    //text-align : start;
    border : 1px solid white;
    height : 5vh;
}

& ul li button {
    height : 4vh;
    width : auto;
    
}

& h3 {
    margin-left : 630px;
}

& h3 span {
    font-weight : bolder;
}

& .prodName { 
    margin-right : 20vw;
    border : 1px solid black;
    width : 20vw;

}

& strong { 
    font-weight : bolder;
}

`


export default function Header({selectedItems,setSelectedItems}){

    const DialogRef = useRef(null);

    function openDialog(){
        DialogRef.current.showModal();
    }

    function closeDialog(){
        DialogRef.current.close();
    }

    function countInc(product){
        setSelectedItems((prevItems) => (prevItems.map((item)  => {
            if(item.product === product){
                return {...item,quantity : item.quantity+1}
            }
            return item;
        }))
            
        )
    }

    
    function countDec(product){
        setSelectedItems((prevItems) => {
            let z = prevItems.find((ele) => ele.product == product);
            if(z.quantity == 1){
                const Arr1 = (prevItems.filter((ele) => ele !== z));
                return Arr1;
            }
            return prevItems.map((item) => {
                if(item.product === product && item.quantity > 1){
                    return {...item,quantity : item.quantity - 1}
                }
                return item;
        }   
    )}
            )
    }

    let sum = 0 ;
    
    return (
        <>
            <StyleDiv>
                <h1>ELEGANT CONTENT</h1>
                <button onClick={openDialog} className='cart-button'>Cart({selectedItems.length})</button>
                <dialog ref={DialogRef}>
                    <h1>YOUR CART</h1>
                    {console.log(selectedItems)}
                    <ul>
                    {selectedItems.map((items,index) => {
                        sum = sum + (items.quantity*(items.cost));
                        return <li key={index}>
                                <div className='prodName'>{items.product}</div>
                                <div><button onClick={() => countInc(items.product)}>+</button>
                                <strong>{items.quantity}</strong>
                                <button onClick={() => countDec(items.product)}>-</button></div><div>${items.quantity*(items.cost)}
                        </div>
                        </li>
                        })}
                    </ul>
                    <h3>Cart Total : <span>${sum}</span></h3>
                    <button onClick={closeDialog}>Close</button>
                </dialog>
            </StyleDiv>
        </>
    )
}