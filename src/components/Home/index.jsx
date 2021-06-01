import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Home = () => {
    return (
        <Container>
            <h1>hola Home</h1>
            <Link to='/login'>Login</Link>
            <br></br>
            <Link to='/naruto'>naruto</Link>
            <br></br>
            <Link to='/hinata'>hinata</Link>

                <Component title='titulo' span='Hola esto es un span' paragraph='parrafo'/>

        </Container>
    )
}
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const ContainerText = styled.div`
`
const Component = ({ title, span, paragraph}) => (
    <ContainerText>
        <h2>{title}</h2>
        <span>{span}</span>
        <p>{paragraph}</p>
    </ContainerText>
)