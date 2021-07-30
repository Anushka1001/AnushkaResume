import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import GitHubIcon from '@material-ui/icons/GitHub';






function Projects() {


    return (
        <Container id="Projects">
                <WidthPartition>
                    <TextLeft>
                        <SmallHeading>
                            <p>Projects
                            <IconButton style={{color: "#ffffff"}} aria-label="GitHubIcon"  onClick={()=> window.open("https://github.com/Anushka1001", "_blank")}>
                                <GitHubIcon />
                            </IconButton></p>
                        </SmallHeading>
                        
                    </TextLeft>
                    <LargeHeading>
                        <LEft>
                        <p>NLP, Twillio &bull; 2020<br/><span>AI Smart Assistant Wheelchair(UPES)</span><br/>&bull;Voice Recognition System &amp; calling System.</p>
                        <hr/><br/>
                        <p>HTML, CSS, Bootstrap, Twillio, JS &bull; 2019<br/><span>Agriculture Robot</span><br/>&bull; Webpage for monitoring Field Data.<br/>&bull;Automated Calling System using NLP &amp; Twillio.</p>
                        <hr/><br/>
                        
                        <p>HTML, CSS, Bootstrap, PHP, MySQL &bull; 2019<br/><span>Fiesa Webstore</span><br/>&bull;A Luxury Webstore Application.</p>
                        <hr/><br/>
                        </LEft>
                        <MID>

                            <img src="images/projects.jpg" />

                        </MID>
                        <RIght>
                        <p>ReactJS &bull; In-Progress<br/><span>Astral</span><br/>&bull; An Educativr website for Astronomy and Cosmos.</p>
                        <hr/><br/>
                        <p>ReactJS, CSS, FireBase &bull; In-Progress<br/><span>Astralio</span><br/>&bull; A Entertainment website for Video content related to Outer-Space.</p>
                        <hr/><br/>
                        </RIght>
                        
                        </LargeHeading>
                    <TextRight>
                        
                    </TextRight>
                
                </WidthPartition>
            

                <Sup>
            <IconButton style={{color:"#AF7AC5"}} aria-label="KeyboardArrowDownIcon" href="#Achi">
                <KeyboardArrowDownIcon/>
            </IconButton><br/>
            </Sup>
        </Container>
    )
}

export default Projects

const Container =styled.div`
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
const WidthPartition =styled.div`
margin:7em 0 0 50px;
display:flex;
flex-direction:column;
@media(max-width:768px){
    display:inline;
}
`
const TextLeft =styled.div`
width:70%;
margin:10px 20px 0 0;
font-family:Julius sans one;
color:#fff;
padding:0 10px;
`
const SmallHeading =styled.div`
color:#AF7AC5;
text-transform:uppercase;
font-size:20px;
font-weight:600;
padding-bottom:0px;
font-family:Julius sans one;
border-bottom:1px #fff dotted;
float:left;
`
const TextRight=styled.div`
    margin:0 0 0 40px;
    font-family:quicksand;
    align-items:center;
    padding:20px 0 0 80px ;
    @media(max-width: 960px){
        width:100%;
        padding:10px;
    }
`
const LargeHeading=styled.div`
    p{
        font-size:15px;
        color:#aaa;
    }
    span{    
        font-size:20px;
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
    }
    padding-bottom:0px;
    
display:flex;
    font-family:quicksand;
`

const LEft =styled.div`
    width:33%;
    padding-left:20px
`
const MID =styled.div`
    width:33%;
    text-align:center;
    img{
        width:300px;
    }
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
const RIght =styled.div`
    width:33%;
    padding-right:50px;
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
// const a =styled.div`

// `
// const a =styled.div`

// `
// const a =styled.div`

// `