import React from 'react';
import styled from 'styled-components'

const ContainerInputsFiltro = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
`
const Inputs = styled.input`
width: 70%;
margin-bottom: 10px;
`

export default class Filtro extends React.Component {
    render () {

        


        return(
            <ContainerInputsFiltro>
                <h3>Filtros</h3>
                <label for="Valminimo">Valor mínimo:</label>
                <Inputs onChange={this.props.onChangeFiltroMin} value={this.props.filtroMin} type="number" id="Valminimo"></Inputs>

                <label for="Valmaximo">Valor máximo:</label>
                <Inputs onChange={this.props.onChangeFiltroMax} value={this.props.filtroMax} type="number" id="Valmaximo"></Inputs>

                <label for="Buscanome">Busca por nome:</label>
                <Inputs onChange={this.props.onChangeBuscaNome} value={this.props.buscaNome} id="Buscanome"></Inputs>
            </ContainerInputsFiltro>
        )
    }
}