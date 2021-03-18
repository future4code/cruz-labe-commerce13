import React from 'react';
import styled from 'styled-components'

const ContainerCarrinho = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
`

export default class Carrinho extends React.Component {

    chamaCarrinho = () => {
        this.props.addCarrinho()
        console.log("entrei no carrinho")
    }


    render () {
        return(
            <ContainerCarrinho>
                <h3>Carrinho:</h3>


            
                
                <p>Valor total:</p>
            </ContainerCarrinho>
        )
    }
}