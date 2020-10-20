import React from 'react'
import styled from 'styled-components'


const TabItem = styled.h2`
    font-size: 28px;
    line-height: 33.18px;
    cursor: pointer;
    padding-left: 24px;
`
const TabListe = styled.ul`
    display: flex;
    justify-content: center;
`

function Tabs() {
    return (
        <div>
            <nav>
                <TabListe>
                    <li><TabItem>Фильмы</TabItem></li>
                    <li><TabItem>Телепередачи</TabItem></li>
                </TabListe>
            </nav>
        </div>
    )
}

export default Tabs
