import React from 'react'
import styled from 'styled-components'
import {Button} from '../../style'

const VideoService = styled.h1`
    font-size: 20px;
    line-height: 23.7px;
    position: relative;
    margin-left: 41.82px;
    &::before {
        position: absolute;
        content: ' ';
        height: 36px;
        width: 36.14725112915039px;
        background-image: url('./img/logo.jpg');
        left: -43.64px;
        top: -7px;
        
    }
`

const NavListe = styled.ul`
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const SearchButton = styled.a`
   color: red;
   cursor: pointer;
   padding-left: 32px;
`

const InputText = styled.input`
   border: none;
   border-bottom: 1px solid #333333;
   min-width: 320px;
   line-height:19px;
   outline: none;
   &:focus {
       color: #333
   }
`

function Header() {
    return (
        <div>
            <nav>
                <NavListe>
                    <li>
                        
                        <VideoService>Видеосервис</VideoService>
                    </li>
                    <li>
                        <InputText 
                            type="text" 
                            placeholder='Поиск...'
                        />
                        <SearchButton>Найти</SearchButton>
                    </li>
                    <li>
                        <Button>Войти</Button>
                    </li>
                </NavListe>
            </nav>
        </div>
    )
}

export default Header
