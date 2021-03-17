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
    render () {
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

                <Card
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
                />
            </ContainerHome>
        )
    }
}