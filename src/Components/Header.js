import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [SideMenuStatus, setSideMenuStatus] = useState(false)
    
    return (
        <Container>
            <a href="#">
                <img src="/images/logolight.png" />
            </a>
            
            <RightMenu>
                <MoveMenu>
                    <a href="#About">About</a>
                    <a href="#Education">Education</a>
                    <a href="#Skills">Skills</a>
                    <a href="#Projects">Projects</a>
                </MoveMenu>
                <MenuIconContainer onClick={()=>setSideMenuStatus(true)}>
                    <MenuIcon style={{color: "#AF7AC5"}} />
                </MenuIconContainer>
            </RightMenu>
            <SideMenu status={SideMenuStatus}>
                <CloseIconContainer>
                    <CloseIcon style={{color: "#AF7AC5"}} onClick={()=>setSideMenuStatus(false)}/>
                </CloseIconContainer>
                <MoveMenuReverse>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Education">Education</a></li>
                    <li><a href="#Education">Career</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    {/* <li><a href="#Info">Experience</a></li> */}
                </MoveMenuReverse>
                <li><a href="#Skills">Skills</a></li>
                {/* <li><a href="#Blog">Blog</a></li> */}
                <li><a href="#Projects">Projects</a></li>
                {/* <li><a href="#Info">Experience</a></li> */}
                <li><a href="#Footer">Contact</a></li>
            </SideMenu>
        


        </Container>
    )
}

export default Header

const Container = styled.div`
display: flex;
min-height: 40px;
align-items:center;
background-color:#0a0a0a;
padding: 0 30px;
position: fixed;
opacity:0.9;
top: 0;
left: 0;
right: 0;
z-index:10;
transition: transform .2s;
    img{
        width:auto;
        height:60px;
        margin:10px 10px 0 10px;
    }
    img:hover{
        transform: scale(1.3);
    }
    
    a{
        text-decoration:none;
        cursor: pointer;
        font-family: Montserrat;
        font-size:19px;
        font-weight:600;
        color:#e9e8e3;
    }
    a:hover{
        text-decoration:none;
        opacity:1;

    }
`
const MoveMenu=styled.a`
    @media(max-width: 768px){
        display:none;
    }
`
const MoveMenuReverse=styled.a`
    @media(min-width: 768px){
        display:none;
    }
`

const RightMenu = styled.div`
    display: flex;
    margin-left:auto;
    align-items: center;
    padding-right:20px;
    a{
        padding-right:30px;
        color:#e9e8e3;
        font-family:Montserrat;
        text-decoration:none;
    }
    a:hover{
        color:#AF7AC5;
    }
    @media(max-width: 480px){
        display:none; 
    }
`
const Menu = styled.div`

`

const MenuIconContainer = styled.div`
    display: flex;
    cursor:pointer;
`

const SideMenu = styled.div`
    position:fixed;
    width:280px;
    top:0;
    right:0;
    bottom:0;
    background-color:#0a0a0a;
    opacity:0.9;
    padding:20px;
    font-family: Montserrat;
    list-style: none;
    text-align:center;
    transform: ${props => props.status ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in;
    li{
        padding:35px 0;
        border-bottom: 0.5px solid #AF7AC5;
        a{
            font-weight: 600px;
            color:#e9e8e3;
            font-size:20px;

        }
        a:hover{
            color:#AF7AC5;
        }
    }
`

const CloseIconContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    cursor:pointer;
`