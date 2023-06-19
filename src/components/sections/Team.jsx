import styled from 'styled-components';
import ConfettiComponent from '../Confetti'
import img from "../../assets/Nfts/bighead.svg";
import img1 from "../../assets/Nfts/bighead-1.svg";
import img2 from "../../assets/Nfts/bighead-2.svg";
import img3 from "../../assets/Nfts/bighead-3.svg";
import img4 from "../../assets/Nfts/bighead-4.svg";
import img5 from "../../assets/Nfts/bighead-5.svg";
import img6 from "../../assets/Nfts/bighead-6.svg";
import img7 from "../../assets/Nfts/bighead-7.svg";
import img8 from "../../assets/Nfts/bighead-8.svg";
import img9 from "../../assets/Nfts/bighead-9.svg";



const Section = styled.section`
min-height: 100vh;
width:100vw;
background-color: ${props => props.theme.body};
position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin:  1rem auto;
  border-bottom: 2px solid ${props => props.theme.text};
  width: fit-content;

  @media (max-width: 40em){
    font-size: ${(props) => props.theme.fontxl};
  }

`;
const Container = styled.div`
width: 70.5%;
margin: 2rem auto;
display: flex	;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em){
    width: 80%;
}
@media (max-width: 48em){
    width: 80%;
    justify-content: center;
}
`;
const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color: ${props => props.theme.carouselColor};
border: 1px solid ${props => props.theme.text};
padding: 1rem;

border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
  transition: all 0.3s ease;
}
`;
const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 1rem 1rem;
position: relative;
z-index: 5;

backdrop-filter: blur(4px);

border: 2px solid ${props => props.theme.text};
border-radius: 20px;
transition: all 0.3s ease;

&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}

@media (max-width: 30em){
    width: 70vw;
}
`;
const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`;
const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
justify-content: center;
align-items: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba},0.9)`};
font-weight:400;
`;

// eslint-disable-next-line react/prop-types
const MerberComponent = ({img, name=" ", position=" "}) =>{
  return(
    <Item>
      <ImageContainer>
        <img src={img} alt={name}/>
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}


const Team = () => {
  return (
    <Section id='team'>
    <ConfettiComponent/>
      <Title>Team</Title>
      <Container>
        <MerberComponent img={img1} name='Maverick.#6969' position='Founder / Head Developer'/>
        <MerberComponent img={img2} name='srn#6846' position='CEO / Head Developer'/>
        <MerberComponent img={img} name='ploo#3459' position='Senior Developer'/>
        <MerberComponent img={img7} name='psychix' position='Web Engineer'/>
        <MerberComponent img={img3} name='Click <3#4137' position='Management'/>
        <MerberComponent img={img4} name='Samurai#6969' position='Management'/>
        <MerberComponent img={img6} name='StaR-LorD#5677' position='Discord Developer'/>
        <MerberComponent img={img8} name='BharaoU#1714' position='Junior Developer'/>
        <MerberComponent img={img5} name='madt.666' position='VFX Generalist'/>
        <MerberComponent img={img9} name='rubaby' position='GFX Artist'/>
      </Container>
    </Section>
  )
}

export default Team