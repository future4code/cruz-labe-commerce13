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

    state ={
        produtos: [
            {nome: "Prato Feito", valor: 15, foto: 'https://picsum.photos/200/200', id: 10, adicionado: false},
            {nome: "Massa Italiana", valor: 30, foto: 'https://picsum.photos/200/202', id: 11, adicionado: false},
            {nome: "Nhoque", valor: 15, foto: 'https://picsum.photos/200/203', id: 12, adicionado: false},
            {nome: "Carne de panela", valor: 12, foto: 'https://picsum.photos/200/204', id: 13, adicionado: false},
            {nome: "Hamburguer", valor: 21, foto: 'https://picsum.photos/200/205', id: 14, adicionado: false},
            {nome: "Salada", valor: 18, foto: 'https://picsum.photos/200/206', id: 15, adicionado: false},
          ],

          carrinho: []
    }


    
        
     addCarrinho = (id) => {
        // console.log(id)
        const adicionado = this.state.produtos.filter((produto) => {
                return produto.id === id
        })
        // const novoObjeto = [...adicionado]
        // this.setState({ adicionado: true})
         console.log(adicionado)
    }


 
    render () {


        const listaProdutos = this.state.produtos.map((item) => {
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

                {/* <Card
                imagem={"https://picsum.photos/200/200"}
                nome={"Bananinha"}
                preco={200}
                />
                <Card
                imagem={"https://picsum.photos/200/201"}
                nome={"Laranjinha"}
                preco={200}
                />
                <Card
                imagem={"https://picsum.photos/200/202"}
                nome={"Acerola"}
                preco={100}
                />
                <Card
                imagem={"https://picsum.photos/200/203"}
                nome={"Acerola"}
                preco={100}
                />
                <Card
                imagem={"https://picsum.photos/200/204"}
                nome={"Acerola"}
                preco={100}
                />
                <Card
                imagem={"https://picsum.photos/200/205"}
                nome={"Acerola"}
                preco={100}
                /> */}
            </ContainerHome>
        )
    }
}