import React from 'react';
import styled from 'styled-components'
import Carrinho from './components/Carrinho';
import Filtro from './components/Filtro';
import Home from './components/Home';
import Card from './components/Card';
import {listaDeprodutos} from './components/dados/listaDeprodutos'



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

  state = {
    carrinho: [],
    filtroMax: "",
    filtroMin: "",
    buscaNome: ""
}

  onChangeFiltroMax = (event) => {
    this.setState({filtroMax: event.target.value})
  }

  onChangeFiltroMin = (event) => {
    this.setState({filtroMin: event.target.value})
    console.log(this.state.filtroMin)
  }

  onChangeBuscaNome = (event) => {
    this.setState({buscaNome: event.target.value})
    console.log(this.state.buscaNome)
  }


   
  addCarrinho = (id) => {
    const adicionado = listaDeprodutos.find((produto) => {
            return id === produto.id
    })

    if(adicionado.quantidade){
      adicionado.quantidade += 1
    } else {
      adicionado.quantidade = 1
    }

    const novoObjeto = [...this.state.carrinho, adicionado]
    this.setState({ carrinho: novoObjeto })
     console.log("AQUI" , novoObjeto) 
}


  
  render () {
    

    return (
      <ContainerPrincipal>

        <ContainerFiltro>
          <Filtro 
          onChangeFiltroMax={this.onChangeFiltroMax} 
          onChangeFiltroMin={this.onChangeFiltroMin}
          onChangeBuscaNome={this.onChangeBuscaNome}
          filtroMax={this.state.filtroMax}
          filtroMin={this.state.filtroMin}
          buscaNome={this.state.buscaNome}/>
        </ContainerFiltro>

        <ContainerProdutos>
          <Home produtos={listaDeprodutos} addCarrinho={this.addCarrinho} coisinha={"bananainha"}/>
        </ContainerProdutos>

        <ContainerCarrinho>
        <Carrinho carrinho={this.state.carrinho}/>
        </ContainerCarrinho>
        
      </ContainerPrincipal>
    );
  }
  
}



