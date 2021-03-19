import React from 'react';
import styled from 'styled-components'


const ContainerCarrinho = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
`

export default class Carrinho extends React.Component {

     

    render () {

        const products = this.props.carrinho
        const renderizaCarrinho = products.map((item) => {
            return (
                <p>{item.nome} - R$ {item.valor},00 -  {item.quantidade}x</p>
            )
        })


        return(
            <ContainerCarrinho>
                <h3>Carrinho:</h3>
               
            {renderizaCarrinho}

                
                <p>Valor total:</p>
            </ContainerCarrinho>
        )
    }
}