import React from 'react';
import styled from 'styled-components'
import Carrinho from './components/Carrinho';
import Filtro from './components/Filtro';
import Home from './components/Home';
import Card from './components/Card';
import {produtos} from './components/dados/produtos'



const ContainerPrincipal = styled.div`
  display: flex;
  width: 100vw;
`
const ContainerProdutos = styled.div`
  border: 1px solid black; 
  width: 60%;
  /* height: 98vh; */
`
const ContainerCarrinho = styled.div`
  border: 1px solid black; 
  width: 20%;
  /* height: 98vh; */
`
const ContainerFiltro = styled.div`
  border: 1px solid black; 
  width: 20%;
  /* height: 98vh; */
`

export default class App extends React.Component {

  
  render () {


    return (
      <ContainerPrincipal>

        <ContainerFiltro>
          <Filtro/>
        </ContainerFiltro>

        <ContainerProdutos>
          <Home produtos={produtos} coisinha={"bananainha"}/>
        </ContainerProdutos>

        <ContainerCarrinho>
        <Carrinho/>
        </ContainerCarrinho>
        
      </ContainerPrincipal>
    );
  }
  
}



