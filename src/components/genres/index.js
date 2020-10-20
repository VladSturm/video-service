import React from 'react'
import styled from 'styled-components'



const ItemListe = styled.ul`
  display: flex;
  justify-content: space-between;
  & li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #fff;
      width: 280px;
      min-height: 208px;
      cursor: pointer;
      margin-bottom: 72px;
      
      
      font-weight: 400;
      opacity: 0.8;
      box-shadow: inset 0px 0px 16px rgba(0, 0, 0, 0.15);
      border-radius: 6px;
      background: linear-gradient(127.83deg, #F2C94C 8.44%, #F29A4A 91.36%);
      &:hover {
          opacity:1;
      }
      
  }
`

function Genres() {
    return (
        <div>   
            <h3>Жанры</h3>
            <ItemListe>
                <li>
                    <img src="./img/emodzi/1.png" alt="1"/>
                    <p>Комедии</p>
                </li>
                <li>
                    <img src="../img/emodzi/2.png" alt="1"/>
                    <p>Драмы</p>
                </li>
                <li>
                    <img src="./img/emodzi/3.png" alt="1"/>
                    <p>Фантастика</p>
                </li>
                <li>
                    <img src="./img/emodzi/4.png" alt="1"/>
                    <p>Ужасы</p>
                </li>
            </ItemListe>
        </div>
    )
}

export default Genres
