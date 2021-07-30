import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import GetAppIcon from '@material-ui/icons/GetApp';


function About() {
    return (
        <Container id="About">
            <WidthPartition>
                <ImageLeft>
                    <img src="images/img.png" />
                </ImageLeft>
                <TextRight>

                        <SmallHeading>
                            <p>About Me</p>
                        </SmallHeading>
                        {/* <LargeHeading>
                            <p>I'm Anushka Bajpai</p>
                        </LargeHeading> */}
                        <Paragraph>
                            <p>I'm a technology-savvy computer science undergraduate with a capacity to analyze, solve problems, and multi-task. I'm optimistic, creative, and enthusiastic about learning something new every day. Currently, I'm acting as an Innovation ambassador at Inderprastha Engineering College and working as an Intern at Satiate Technologies Pvt. Ltd. I have an exceptional interest in space and the universe, and I'm looking to expand my universe and be someone I conceive to be.</p>
                        </Paragraph>
                        <SmallHeading>
                            <span><p>Contact</p></span>
                        </SmallHeading>
                        <Information>
                            <ul>
                                <li>Anushka Bajpai</li>
                                <li>CSE undergraduate</li>
                                <li>IPEC</li>
                                <li>201010</li>
                                <li>+91 708*****25</li>
                                <li>anushka.bajpai1006@gmail.com</li>
                            </ul>
                        <DownloadFile>
                            <a href="resume/Anushkabajpai.pdf" download="Anushkabajpai.pdf">
                                <button><GetAppIcon /> Download Resume</button>
                            </a>
                        </DownloadFile>
                        </Information>

                </TextRight>
            </WidthPartition>
            <Sup>
            <IconButton style={{color:"#AF7AC5"}} aria-label="KeyboardArrowDownIcon" href="#Education">
                <KeyboardArrowDownIcon/>
            </IconButton><br/>
            </Sup>
        </Container>
    )
}

export default About

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
    padding:5em 0px 0 40px;
    display:flex;

`
const ImageLeft=styled.div`
    width:30%;
    margin:5em 20px 0 0;
    text-align:center;
    padding:0 10px 30px 0;
    img{
        height:400px;
        width:auto;
        border-radius:30px;
        animation: bounce 1s infinite alternate;
        -webkit-animation: bounce 1s infinite alternate;
    }
    @media(max-width: 960px){
        display:none;
    }
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
`
const TextRight=styled.div`
    width:70%;
    margin:0 0 0 40px;
    align-items:center;
    padding:20px 0 0 80px ;
    @media(max-width: 960px){
        width:100%;
        padding:10px;
    }
`
const SmallHeading = styled.div`
        color:#AF7AC5;
        font-size:25px;
        font-weight:600;
        font-family: Julius Sans One;
        padding-bottom:0px;
        width:35%;
        span{
            @media(max-width: 768px){
                display:none;
            }
        }
`

const Paragraph=styled.div`
    width:70%;
    color:#fff;
    font-family:Quicksand;
    padding:0 0 0 0;
    font-weight:600;
    @media(max-width: 768px){
        width:90%;
    }
`
const Information=styled.div`
    width:90%;
    font-style:italic;
    align-items:center;
    font-family:Quicksand;
    display:flex;
    color:#e9e8e3;
    ul{
        list-style:none;
        margin:0;
        padding:0;
        @media(max-width: 768px){
            display:none;
        }
    }
    li{
        padding-bottom:8px;
    }
    
`
const DownloadFile=styled.div`
    button{
        background-color:#563066;
        border-radius:4px;
        height:40px;
        font-size:20px;
        font-family:Montserrat;
        font-weight:400;
        border:0px;
        align-items:center;
        width:auto;
        margin-left:80px;
        color:#e9e8e3;
    }
    button:hover{
        opacity:0.9;
        background-color:#0a0a0a;
        transition:transform 1s;
        transform: translateY(-0.3em);
    }
    @media(max-width: 768px){
        margin-left:40px;
    }
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