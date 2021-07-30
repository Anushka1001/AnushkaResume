import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { SkillBars } from 'react-skills';

const skillsData= [
    {
        name: 'C',
        level: 70,
        color: '#201226',
    },
    {
        name: 'Python',
        level: 65,
        color: '#2d1936',
    },
    {
        name: 'HTML',
        level: 80,
        color: '#3c2247',
    },
    {
        name: 'CSS',
        level: 80,
        color: '#563066',
    },
    {
        name: 'ReactJS',
        level: 70,
        color: '#653978',
    },
    {
        name: 'BootStrap',
        level: 80,
        color: '#76428c',
    },
    {
        name: 'JavaScript',
        level: 50,
        color: '#874ca1',
    },
    {
        name: 'MySQL',
        level: 50,
        color: '#9b57b8',
    },
    {
        name: 'PHP',
        level: 30,
        color: '#ac61cc',
    },
    {
        name: 'C# .NET',
        level: 10,
        color: '#c36ee8',
    },
  ]
  

function Skills() {
    return (
        <Container id="Skills">
                <WidthPartition>
                    <TextLeft>
                        <SmallHeading>
                            <p>Skills</p>
                        </SmallHeading>
                        <br/>
                        <SkillText>
                            <ul>
                                <li><u>Languages</u>: <span>c, Python, HTML, CSS, JavaScript, PHP, MySQL, C#, Java, C++</span></li>
                                <li><u>Frameworks</u>: <span>ReactJS, .NET, Bootstrap, WordPress</span></li>
                                <li><u>Concepts</u>: <span>Machine Learning, Federated Learning</span></li>
                            </ul>
                        </SkillText>
                        <ImgLeft>
                            <img src="images/skills.png"/>
                        </ImgLeft>
                    </TextLeft>

                    <TextRight>

                        <SkillsBarContainer>

                            <SkillBars skills={skillsData} />

                        </SkillsBarContainer>

                    </TextRight>
                </WidthPartition>
                <Sup>
            <IconButton style={{color:"#AF7AC5"}} aria-label="KeyboardArrowDownIcon" href="#Projects">
                <KeyboardArrowDownIcon/>
            </IconButton><br/>
            </Sup>
        </Container>
    )
}

export default Skills

const Container=styled.div`
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
        margin:5.5em 0 0 50px;
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
    display:flex;
    flex-direction:column;
    padding:0 10px;
    @media(max-width:768px){
        width:80%;
    }
`
const ImgLeft=styled.div`
    display:flex;
    img{
        height:300px;
        width:auto;
    }
    padding-top:60px;
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
const SkillText=styled.div`
    @media(max-width:768px){
        display:flex;
    }
    display:none;
    ul{
            list-style:none;
            text-align:left;
            line-height:2;
    }
    li{
        font-size:20px;
        margin:10px;
        color:#AF7AC5;
    }
    span{
        text-decoration:none;
        font-weight:300;
        color:#dddddd;
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

const SkillsBarContainer=styled.div`
    font-family:Quicksand;
    padding-bottom:20px;
    @media(max-width:768px){
        display:none;
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