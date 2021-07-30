import React from 'react'
import styled from 'styled-components'

function Achi() {
    return (
        <Container id="Achi">
            <WidthPartition>
                <Right>
                    <Para>
                        <p>
                            <img src="images/q.png"/><br/><span>To raise new questions, new possibilities, to reward old problems from a new angle requires creative Imagination, Innovation and marks real advances in science.</span>
                        </p>
                    </Para>
                    <By>
                        <p>-Albert Einstein</p>
                    </By>
                </Right>
            </WidthPartition>

        </Container>
    )
}

export default Achi

const Container =styled.div`
    display:flex;
    background-image:url("images/bga.png");
    background-size:cover;
    background-repeat:no-repeat;
    font-family:Montserrat;
    height:100vh;
    flex-direction:column;
    top:0;
    left:0;
    right:0;    
    color:#fff;
`
const WidthPartition =styled.div`
    display:flex;
    margin:5em;
    @media(max-width:768px){
        display:inline;
    }
`

// const SmallHeading =styled.div`
// color:#AF7AC5;
// text-transform:uppercase;
// font-size:17px;
// font-weight:600;
// padding-bottom:0px;
// font-family:Julius sans one;
// float:right;
    
// `
const Para =styled.div`
font-size:17px;
font-family:Quicksand;
text-align:justify;
img{
    height:80px;
    margin-right:30px;
    animation: bounce 1s infinite alternate;
    -webkit-animation: bounce 1s infinite alternate;
    @keyframes bounce {
        from {
          transform: translateX(0px);
        }
        to {
          transform: translateX(-15px);
        }
      }
      @-webkit-keyframes bounce {
        from {
          transform: translateX(0px);
        }
        to {
          transform: translateX(-15px);
        }
      }
      @media(max-width:768px){
        display:none;
    }
}
span{
    padding-left:3em;
    width:100px;
    font-size:30px;
    font-style:italic;
}
`

const Right =styled.div`
    display:flex;
    flex-direction:column;
    margin:0 7em;
    padding-top:80px;
`
const By =styled.div`
    color:#ccc;
    text-align:right;
    font-size:25px;
    font-style:italic;
    padding-right:4em;
`
