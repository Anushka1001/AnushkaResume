import React from 'react'
import styled from 'styled-components'
import About from './About'
import Education from './Education'
import Skills from './Skills'
import Achi from './Achi'
import Projects from './Projects'
import Section from './Section'
import Footer from './Footer.js'


function Home() {
    return (
        <Container>
                <Section />
                <About/>
                <Education />
                <Skills />
                <Projects/>
                <Achi />
                <Footer />
            
        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100%;
    background-color:#fff;
    
`