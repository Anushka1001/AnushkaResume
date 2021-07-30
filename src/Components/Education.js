import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Education() {
    return (
        <Container id="Education">
            <WidthPartition>
                <TextLeft>
                    <SmallHeading>
                        <p>Education &amp; Career</p>
                    </SmallHeading>
                    <br/>
                    <ImgLeft>
                        <img src="images/education.png"/>
                    </ImgLeft>
                </TextLeft>
                <TextRight>
                    <LargeHeading>
                        <p>March, 21 - June, 21<br/><span>Satiate Technologies Pvt. Ltd.</span></p>
                        <ul><li>Web Development Intern</li></ul><hr/>
                        <p>2018-Present &bull; CSE<br/><span>I.P.E.C, Ghaziabad</span><ul>
                            <li>8.2 CGPA</li>
                        </ul></p>
                        <hr/>
                        <p>2017 &bull; XII<br/><span>S.J.S. Public School, Raebareli</span><ul>
                            <li>(85%)</li>
                        </ul></p>
                        <hr/>
                        <p>2015 &bull; X<br/><span>S.J.S. Public School, Raebareli</span><ul>
                            <li>10 CGPA</li>
                        </ul></p>
                    </LargeHeading>
                </TextRight>
            </WidthPartition>
            <Sup>
            <IconButton style={{color:"#AF7AC5"}} aria-label="KeyboardArrowDownIcon" href="#Skills">
                <KeyboardArrowDownIcon/>
            </IconButton><br/>
            </Sup>
        </Container>
    )
}

export default Education


const Container = styled.div`
display:flex;
background-image:url("images/bgf.png");
background-size:cover;
background-repeat:no-repeat;
font-family:Montserrat;
height:100vh;
flex-direction:column;
top:0;
left:0;
right:0;
`
const WidthPartition = styled.div`
        margin:5em 0 0 50px;
        display:flex;
        @media(max-width:768px){
            display:inline;
        }
`
const TextLeft=styled.div`
    width:30%;
    margin:10px 20px 0 0;
    text-align:right;
    font-family:Julius sans one;
    color:#fff;
    padding:0 10px;
`
const ImgLeft=styled.div`
    display:flex;
    img{
        height:300px;
        width:auto;
    }
    padding:8em 0 0 70px;
    animation: bounce 1s infinite alternate;
    -webkit-animation: bounce 1s infinite alternate;
    @keyframes bounce {
        from {
          transform: translateY(0px);
        }
        to {
          transform: translateY(-15px);
        }
      }
      @-webkit-keyframes bounce {
        from {
          transform: translateY(0px);
        }
        to {
          transform: translateY(-15px);
        }
      }
      @media(max-width:768px){
        display:none;
    }
`



const TextRight=styled.div`
    width:50%;
    margin:0 0 0 40px;
    font-family:quicksand;
    align-items:center;
    padding:20px 0 0 80px ;
    @media(max-width: 960px){
        width:100%;
        padding:10px;
    }
`
const SmallHeading=styled.div`
    color:#AF7AC5;
    text-transform:uppercase;
    font-size:20px;
    font-weight:600;
    padding-bottom:0px;
    font-family:Julius sans one;
    border-bottom:1px #fff dotted;
    float:right;
`
const LargeHeading=styled.div`
    p{
        font-size:15px;
        color:#aaa;
    }
    span{    
        font-size:22px;
        font-weight:500;
        color:#fff;
        text-transform:uppercase;
    }
    ul{
        list-style:none;
        color:#888;
        font-style:italic;
        padding-left:0;
        @media(max-width: 768px){
            display:none;
        }
    }
    li{
        padding-bottom:8px;
        font-size:17px;
    }
    padding-bottom:0px;
    
    font-family:quicksand;
`
const Information = styled.div`
    width:90%;
    align-items:center;
    display:flex;
    font-size:15px;
    color:#888;
    
`

const Sup=styled.div`
text-align:center;
padding-top:20px;
    animation: bounce 1s infinite alternate;
    -webkit-animation: bounce 1s infinite alternate;
    @keyframes bounce {
        from {
          transform: translateY(0px);
        }
        to {
          transform: translateY(-15px);
        }
      }
      @-webkit-keyframes bounce {
        from {
          transform: translateY(0px);
        }
        to {
          transform: translateY(-15px);
        }
      }
      @media(max-width:768px){
        display:none;
    }
    }
`