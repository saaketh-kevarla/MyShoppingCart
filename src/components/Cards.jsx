import {styled} from 'styled-components';
const CardDiv = styled.div`
border : 2px solid teal;


`


export default function Cards({product,cost,description}){

    return (
        <>
        <CardDiv>
            <h2>{product}</h2>
            <h3>${cost}</h3>
            <p>{description}</p>
        </CardDiv>
        </>
    )
}