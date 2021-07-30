import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';


function Footer() {
    return (
	<Box id="Footer">
	<Container>
        <SocialIcons>
                <IconButton style={{color: "#666"}} aria-label="LinkedInIcon"  onClick={()=> window.open("https://www.linkedin.com/in/anushkabajpai1006/", "_blank")}>
                    <LinkedInIcon />
                </IconButton>
                <IconButton style={{color: "#666"}} aria-label="GitHubIcon"  onClick={()=> window.open("https://github.com/Anushka1001", "_blank")}>
                    <GitHubIcon />
                </IconButton>
                <IconButton style={{color: "#666"}} aria-label="TwitterIcon" onClick={()=> window.open("#", "_self")}>
                    <TwitterIcon />
                </IconButton>
                <IconButton style={{color: "#666"}} aria-label="InstagramIcon" onClick={()=> window.open("#", "_self")}>
                    <InstagramIcon />
                </IconButton>
                <IconButton style={{color: "#666"}} aria-label="PermMediaIcon" onClick={()=> window.open("https://anushkabajpai-certificates.netlify.com/", "_blank")}>
                    <PermMediaIcon />
                </IconButton>
                
            </SocialIcons>
                <Text>
                <p>anushka.bajpai1006@gmail.com<span>&bull;</span>Resume-Anushka Bajpai</p>
                </Text>
                
	</Container>
	</Box>
    )
}

 export default Footer


const Box = styled.div`
padding: 30px 60px;
background: #111;
bottom: 0;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

 const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`
const SocialIcons=styled.div`
    display:Flex;
    color:#fff ;
    align-items:Center;
    text-align:center;
    justify-content:center;
    padding:20px 90px 0 50px; 
    @media(max-width: 620px){
        display:none;
    }
    p{
        color:#555;
        padding:30px;
        font-size:15px;
        font-family:Quicksand;
    }
`
const Text=styled.div`
display:Flex;
    color:#fff ;
    align-items:Center;
    text-align:center;
    justify-content:center;
    padding:20px 90px 0 50px; 
    @media(max-width: 620px){
        display:none;
    }
p{
    color:#555;
    font-size:15px;
    font-family:Quicksand;
    span{
        color:#999;
        margin:0 20px;
        font-size:25px;
        align-items:center;
    }
}
`