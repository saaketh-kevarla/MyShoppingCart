import {styled} from 'styled-components';
const CardDiv = styled.div`
border : 2px solid teal;
position : relative;

& img {
height : 45vh;
width : 100%;
}

& button { 
    height : 5vh;
    width : 3vw;
    position : absolute;
    right : 10px;
    background-color : black;
    color : white;
}

& div p {
border : 1px solid orange;
height : 20vh;
width : 21vw;
text-align : center;
font-size : 14px;
}


`


export default function Cards({product,cost,description,image,setSelectedItems,selectedItems}){
    function AddHandler(){
        setSelectedItems((prevItems) => { 
            let a = prevItems.find((item) => item.product === product)
            if(a){
                return prevItems;
            }
            const newArr = [...prevItems,{
                product : product,
                cost : cost,
                quantity : 1,
                
            }]

            return newArr;
        })
    }

    return (
        <>
        {console.log(selectedItems)}
        <CardDiv>
            <img src = {image} alt = {product} />
            <h2>{product}</h2>
            <h3>${cost}</h3>
            <div><p>{description}</p></div>
            <button onClick={AddHandler} >Add</button>
        </CardDiv>
        </>
    )
}