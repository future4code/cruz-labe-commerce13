import React from 'react';
import styled from 'styled-components'


const ContainerCard = styled.div`
display: flex;
border: 1px solid black;
width: 30%;
flex-direction: column;
padding: 5px;
`

export default class Card extends React.Component {
    render () {
        return(
            <ContainerCard>
                <img src={this.props.imagem}/>
                <p>
                {this.props.nome}
                </p>
                <p>
                R$: 
                {this.props.preco}
                </p>
                <button>
                    Adicionar ao carrinho
                </button>
                
            </ContainerCard>
        )
    }
}