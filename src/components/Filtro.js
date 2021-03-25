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
                <Inputs type="number" id="Valminimo"></Inputs>

                <label for="Valmaximo">Valor máximo:</label>
                <Inputs type="number" id="Valmaximo"></Inputs>

                <label for="Buscanome">Busca por nome:</label>
                <Inputs id="Buscanome"></Inputs>
            </ContainerInputsFiltro>
        )
    }
}