import React from 'react'
import {Wrap} from '../../style'
import styled from 'styled-components'

const FooterStyled = styled.footer`
    background-color: #F2F2F2;
    min-height: 120px;
    display: flex;
    align-items: center;
    
`

const FooterWrap = styled(Wrap)`
    display: flex;
    & img {
        margin-right: 40px;
    }
`

const FooterKontat = styled.div`
    display: flex;
    flex-direction: column;
    & address, a {
        line-height: 26px;
    }
`

const FooterSeiteLink= styled.a`
    color: rgba(31, 71, 102, 1);
    font-weight: 500;
    
`

function Footer() {
    return (
        <FooterStyled>
            <FooterWrap>
                <img src="./img/footerLogo.png" alt="footerLogo"/>
                <FooterKontat>
                    <address>
                        426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)
                    </address>
                    <a href="tel:+7 (3412) 93-88-61, 43-29-29">+7 (3412) 93-88-61, 43-29-29</a>
                    <FooterSeiteLink href="http://htc-cs.ru">htc-cs.ru</FooterSeiteLink>
                </FooterKontat>
            </FooterWrap>
        </FooterStyled>
    )
}

export default Footer
