import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import GitHubIcon from '@material-ui/icons/GitHub';


function Section() {
    return (
        <Container>
                <TextChange1>
                    <p>I'm <span>Anushka Bajpai</span></p>
                </TextChange1>
                <TextChange2>
                    <p>&ldquo;A Computer Science undergraduate striving to gain knowledge by utilizing my abilities for innovative projects in the field of development. Bringing the best out of me, every chance I earn!<br/>P.S.: Just creating things!&rdquo;</p>
                </TextChange2>
            
            <SocialIcons>
                <IconButton style={{color: "#fff"}} aria-label="LinkedInIcon"  onClick={()=> window.open("https://www.linkedin.com/in/anushkabajpai1006/", "_blank")}>
                    <LinkedInIcon />
                </IconButton>
                <IconButton style={{color: "#fff"}} aria-label="GitHubIcon"  onClick={()=> window.open("https://github.com/Anushka1001", "_blank")}>
                    <GitHubIcon />
                </IconButton>
                <IconButton style={{color: "#fff"}} aria-label="TwitterIcon" onClick={()=> window.open("#", "_self")}>
                    <TwitterIcon />
                </IconButton>
                <IconButton style={{color: "#fff"}} aria-label="InstagramIcon" onClick={()=> window.open("#", "_self")}>
                    <InstagramIcon />
                </IconButton>
                <IconButton style={{color: "#fff"}} aria-label="PermMediaIcon" onClick={()=> window.open("https://anushkabajpai-certificates.netlify.com/", "_blank")}>
                    <PermMediaIcon />
                </IconButton>
            </SocialIcons>
            <Sup>
            <IconButton style={{color:"#e9e8e3"}} aria-label="KeyboardArrowDownIcon" href="#About">
                <KeyboardArrowDownIcon/>
            </IconButton><br/>
            </Sup>
        </Container>
    )
}

export default Section

const Container = styled.div`
    background-image: url("./Images/bg.png");
    
    width: 100%;
    height:100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
`



const TextChange1 = styled.div`
    font-family: Julius Sans One;
    float:left;
    font-weight:600;
    text-transform:uppercase;
    font-size:50px;
    color:#fff;
    padding:4em 0 0 100px; 
    margin-bottom:0;
    span{
        color:#563066;
    }
`
const TextChange2=styled.div`
    color:#fff;
    font-size:20px;
    padding:0 0 0 100px;
    margin:0px;
    font-family:Quicksand;
    font-style: italic;
    max-width:60%;
    font-weight:500;
`

const SocialIcons=styled.div`
    display:Flex;
    color:#d4d4ca ;
    align-items:Center;
    padding:20px 0 0 90px; 
    @media(max-width: 620px){
        display:none;
    }
    span{
        
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