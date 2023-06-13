import styled from 'styled-components';
import Accordion from '../Accordion';
import { useLayoutEffect, useRef } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const Section = styled.section`
min-height: 100vh;
height: auto;
width:100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${props => props.theme.body};

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${props => props.theme.body};

  margin:  1rem auto;
  border-bottom: 2px solid ${props => props.theme.body};
  width: fit-content;

  @media (max-width: 48em){
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

@media (max-width: 64em){
  width: 80%;
}
@media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{
      margin-top: 0;
    }
  }
}
`;
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  width: 90%;
  align-self: center;
}
`
function Faq() {

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(()=> {

    let element = ref.current;

    const scrollMetho = ScrollTrigger.create({
      trigger: element,
      start:'top top',
      end:'bottom top',
      pin: true,
      pinSpacing:false,
      scrub: true,
      markers: false,
    })


    return () => {
      scrollMetho.kill();
    }
  },[])

  return (
    <Section ref={ref} id='faq'>
    <Title>FAQ</Title>
    <Container>
    <Box>
      <Accordion title="WHERE CAN ORDER MAVIX SERVICES?">
      You Can Place Your Order Via Our Discord Ticket System Or On Our Fiverr.
      </Accordion>
      <Accordion title="WHERE CAN I GET SUPPORT?">
      You Can Get Support Via Our Discord By Creating A Support Ticket Request.
      </Accordion>
      <Accordion title="DOES MAVIX ONLY WORK ON ESX FRAMEWORK?">
      Yes MAVIX ORG Only Works On ESX Latest Framework.
      </Accordion>
    </Box>
    <Box>
      <Accordion title="CAN I JUST BUY THE FILES / ASSETS?">
      Yes You Can Also Purchase Our Files / Assets / Resources.
      </Accordion>
      <Accordion title="WHAT IS MAVIX ORG?">
      MAVIX ORG is A Private Organization Dealing in FiveM Development , With World Class Developers Working With Us.
      </Accordion>
      <Accordion title="WHY CHOOSE US?">
      MAVIX ORG Has More Than 1000+ Clients Worldwide With 5 ⭐ Ratings , Each Development is Unique And Comes With All Possible Support.
      </Accordion>
    </Box>
    </Container>
    </Section>
  )
}

export default Faq