import React from 'react';
import styled from 'styled-components'
import Card from './Card';

const ContainerHome = styled.div`
display: flex;
margin: 10px; 
gap: 10px;
align-items: center;
justify-content:center;
`
export default class Home extends React.Component {
    render () {
        return(
            <ContainerHome>
                <Card
                imagem={"https://picsum.photos/200/200"}
                nome={"Bananinha"}
                preco={"R$"}
                />
                <Card
                imagem={"https://picsum.photos/200/201"}
                nome={"Laranjinha"}
                preco={"R$"}
                />
                <Card
                imagem={"https://picsum.photos/200/202"}
                nome={"Laranjinha"}
                preco={"R$"}
                />
            </ContainerHome>
        )
    }
}