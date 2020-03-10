import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`



const Styler = styled.div`
display: grid;
width: 100vw;
height: 100vh;
align-items: center;
justify-items: center;
border-radius: 2px;

h1{
    color: #F6F8FF;
    font-size: 60px;
    font-weight: 700;
    margin: 0;
}

h3{
    display: inline-block;
    color: #F6F8FF;
    font-size: 30px;
    font-weight: 500;
    margin: 0;
}

h6{
    color: #282C34;
    font-size: 20px;
    font-weight: 500;
    margin: 0;
}

> div{
    background-color: #F6F8FF;
    width: 60%;
    height: 60%;
    display: grid;
    grid-template-columns: 1.1fr 4.5fr 4fr;
}
div{
    section.choose{
        position: relative;

        > div{
            display: inline-block;
            width: 100%;
            position: absolute;
	        top: 50%;
	        left: 50%;
            transform: translate(-50%,-50%);
            
            div:first-of-type{
                position: relative;
                h6{
                    margin-bottom: 50%;
                }
            }

            div{
                position: relative;
                div{
                    position: absolute !important;
                    left: 0;
                    top: -12%;
                    height: 120%;
                    width: 9%;
                    background: rgb(40,44,52);
                    background: linear-gradient(-10deg, rgba(16,68,81,1) 0%, rgba(35,49,58,1) 50%, rgba(40,44,52,1) 100%);
                }
            }
        }
    }

    section.information{
        position: relative;
        width: 100%;
        height: 100%;
        div{
            position: absolute;
            left: 0;
            top: -3%;
            width: 100%;
            height: 106%;
            background: rgb(40,44,52);
            background: linear-gradient(-10deg, rgba(16,68,81,1) 0%, rgba(35,49,58,1) 50%, rgba(40,44,52,1) 100%);
            border: 1px solid rgba(112, 112, 112, 0.2);
            border-radius: 2px;
            text-align: center;
            
            h1{
                padding: 20px;
                color: #0E9DC1;
            }

            img{
                margin-top: 20%;
                margin-bottom: -1%;
                height: 30%;
                animation: ${rotate} 13s linear infinite;
            }

            h3{
                margin-top: 1%;
            }
        }
    }

    section.input-form{
        background-color: none;
        text-align: center;
        position: relative;
        width: 100%;
        height: 100%;

        > div {
            position: absolute;
            top: 50%;
	        left: 50%;
            transform: translate(-50%,-50%);
            width: 100%;
            text-align: center;

            input[type=text], input[type=password]{
                text-align: center;
                background-color: #F6F8FF;
                box-shadow:  6px 6px 18px #919296, 
                            -10px -10px 20px #ffffff;
                color: rgba(40, 45, 53, 0.7);
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-weight: 200;
                font-size: 20px;
                display: inline-block;
                border: none;
                border-radius: 5px;
                padding: 0 10px;
                width: 70%;
                height: 60px;
            }

            input[type=text]:first-of-type{
                margin-bottom: 10%;
            }

            h3{
                font-weight: 200;
                font-size: 25px;
                color: #282D35;
                margin: 4% 0 0 0;

                span{
                    color: #0E9DC1;
                    text-decoration: none;
                }
                display: block;
            }

            h3:first-of-type{
                margin: 6% 0 6% 0;
            }

            img{
                cursor: pointer;
                display: inline-block;
            }
        }
    }
}
`

export default Styler