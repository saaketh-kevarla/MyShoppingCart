import {styled} from 'styled-components'

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


`


export default function Header(){
    
    return (
        <>
            <StyleDiv>
                <h1>ELEGANT CONTENT</h1>
                <button>Cart(0)</button>
            </StyleDiv>
        </>
    )
}