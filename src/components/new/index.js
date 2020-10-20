import React from 'react'
import styled from 'styled-components'

const NewHeader = styled.h3`
    position: relative;
    margin-left: 30px;
    &::before {
        position: absolute;
        content: " ";
        width: 50px;
        height: 50px;
        background-image: url('./img/fire.png');
        background-size: cover;
        top: -15px;
        left: -45px;

    }
    
`

const ItemListe = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
  & li {
      display: block;
      min-width: 150px;
      max-width: 280px;
      font-weight: 400;
      cursor: pointer;
      & img {
          border-radius: 8px;
      }
  }
`

function New() {
    return (
        <div>   
            <NewHeader>Новинки</NewHeader>
            <ItemListe>
                <li>
                    <img src="./img/films/1.jpg" alt="1"/>
                    <p>Мульт в кино. Выпуск №103. Некогда грустить!</p>
                </li>
                <li>
                    <img src="./img/films/2.jpg" alt="1"/>
                    <p>Новый Бэтмен</p>
                </li>
                <li>
                    <img src="./img/films/3.jpg" alt="1"/>
                    <p>Однажды... в Голливуде</p>
                </li>
                <li>
                    <img src="./img/films/4.jpg" alt="1"/>
                    <p>Стриптизёрши</p>
                </li>
            </ItemListe>
        </div>
    )
}

export default New
