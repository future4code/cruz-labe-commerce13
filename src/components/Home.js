import React from 'react';
import styled from 'styled-components'
import Card from './Card';

const ContainerHome = styled.div`
display: flex;
margin: 10px; 
gap: 10px;
align-items: center;
justify-content:center;
flex-wrap:wrap;
`

const ContainerSelect = styled.span`
width:100%;
height: 10%;
display:flex;
justify-content:space-between;
align-items: center;
`

const ContainerSpan = styled.div`
display:flex;
align-items: center;
`

export default class Home extends React.Component {

    state = {
        carrinho: []
    }

    
        
     addCarrinho = (id) => {
        // console.log(id)
        const adicionado = this.props.produtos.filter((produto) => {
                return produto.id === id
        })
        const novoObjeto = [...this.state.carrinho, adicionado]
        this.setState({ carrinho: novoObjeto })
         console.log(novoObjeto)
    }

 
 
    render () {
        // console.table(this.props.produtos)
        // console.log(this.props.coisinha)

        const listaProdutos = this.props.produtos.map((item) => {
            return (
                
                <Card
                imagem={item.foto}
                nome={item.nome}
                preco={item.valor}
                aoAdicionar={ () => this.addCarrinho(item.id)}
                />
            )
        })


        return(
            <ContainerHome>

                <ContainerSelect>
                    <p>Quantidade de produtos:</p>
                    <ContainerSpan>
                        <p>Ordenação: </p>
                        <select>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </ContainerSpan>
                </ContainerSelect>

                {listaProdutos}

            </ContainerHome>
        )
    }
}