import styled from 'styled-components'

const HeaderStyler = styled.header`
width: 100%;
position: relative;

img{
    height: 8vh;
    position: absolute;
    top: 20%;
    left: 1%;
}
  
h1{
    display: inline-block;
    margin: 40px 25px;
    color: #74B3CE;
    font-weight: 600;
    font-size: 25px;
}

> h2{
    margin: 0;
    font-weight: 600;
    font-size: 25px;
    position: absolute;
    top: 40px;
    right: 11.5%;
    padding: 7px 30px 10px 30px;
    border-radius: 20px;
    background-color: rgba(116,179,206, 0.8);
    cursor: pointer;
}

`

export default HeaderStyler