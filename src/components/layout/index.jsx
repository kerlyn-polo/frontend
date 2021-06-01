import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './styles.css'
 const Layout = props => {
    return (
        <div>
            <Header>
                <Nav>
                    <Ul>
                        <li>
                            <Link to='/'>Home</Link>
                            <Link to='/hinata'>Hinata</Link>
                            <Link to='/naruto'>ñe</Link>
                            <Link to='/login'>Login</Link>
                            <Enlace to='/'>Enlace de prueba</Enlace>
                        </li>
                    </Ul>
                </Nav>
            </Header>
                {props.children}
            <footer>Footer</footer>
        </div>
    )
}
export const Nav = styled.nav`
    display: flex;
    margin: 10px;
`
export const Enlace = styled(Link)`
    margin: 0px 10px 10px;
    border: 30px solid green;
    border-top: 30px solid yellow;
    border-bottom: 30px solid yellow;
`
export const Header = styled.header`
    display: flex;
    box-shadow:  1px 1px 1px red;
    background-color: red;
    transition: .4s ease; 
    // aqui aplicamos los estilos en el modo movile
    @media(min-width: 769px){
        background-color: yellow;
    }
    &:hover{
        background-color: blue;

    }
`

export const Ul = styled.ul`
    display: flex;
`
export default Layout 
