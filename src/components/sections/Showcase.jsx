import styled, { keyframes } from 'styled-components';
import { useRef } from 'react'

// import img1 from "../../assets/Nfts/bighead-1.svg";
// import img2 from "../../assets/Nfts/bighead-2.svg";
// import img3 from "../../assets/Nfts/bighead-3.svg";
// import img4 from "../../assets/Nfts/bighead-4.svg";
// import img5 from "../../assets/Nfts/bighead-5.svg";
// import img6 from "../../assets/Nfts/bighead-6.svg";
// import img7 from "../../assets/Nfts/bighead-7.svg";
// import img8 from "../../assets/Nfts/bighead-8.svg";
// import img9 from "../../assets/Nfts/bighead-9.svg";
// import img10 from "../../assets/Nfts/bighead-10.svg";
// import ETH from '../../assets/icons8-ethereum-48.png'

const Section = styled.section`
min-height: 100vh;
width:100vw;
background-color: ${props => props.theme.text};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;

&>*:first-child{
  animation-duration: 20s;

  @media (max-width: 30em){
    animation-duration: 15s;
  }
}
&>*:last-child{
  animation-duration: 15s;

  @media (max-width: 30em){
    animation-duration: 10s;
  }
}
`;
const move = keyframes`
0%{transform: translateX(100%)};
100%{transform: translateX(-100%)}
`;
const Row = styled.div`
white-space: nowrap;
box-sizing: content-box;
margin: 2rem 0;
display: flex;

animation: ${move} linear infinite ${props => props.direction};
`;
const ImgContainer = styled.div`
width: 15rem;
margin: 0 1rem;
// background-color: ${props => props.theme.body};

border-radius: 20px;
cursor: pointer;

@media (max-width: 48em){
    width: 12rem;
}
@media (max-width: 30em){
    width: 10rem;
}

img{
  width: 100%;
  height: auto;
}
`;
const Details = styled.div`
display: flex;
justify-content: space-between;
padding: 0.8rem 1rem;
background-color: ${props => props.theme.text};
border: 2px solid ${props => `rgba(${props.theme.bodyRgba},0.5)`};
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;

span{
  font-size: ${props => props.theme.fontsm};
  color: ${props => `rgba(${props.theme.bodyRgba},0.5)`};
  font-weight: 600;
  line-height: 1.5rem;
}

h1{
  font-size: ${props => props.theme.fontmd};
  color: ${props => props.theme.body};
  font-weight: 600;

  @media (max-width: 30em){
    font-size: ${props => props.theme.fontsm};
}
}
`;
const Title = styled.h1`
font-family: "Helvetica-Bold;
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:  1rem auto;
  // border-bottom: 2px solid white};
  width: fit-content;

  @media (max-width: 40em){
    font-size: ${(props) => props.theme.fontxl};
  }

`;
// const Price = styled.div`
// display: flex;
// justify-content: flex-start;
// align-items: center;

// img{
//   width: 1rem;
//   height: auto;
// }
// `;

// eslint-disable-next-line react/prop-types
const NftItem = ({img, name, passRef}) =>{

  let play = (e) => {
    // eslint-disable-next-line react/prop-types
    passRef.current.style.animationPlayState = 'running';
  }
  let pause = (e) =>{
    // eslint-disable-next-line react/prop-types
    passRef.current.style.animationPlayState = 'paused';
  }


  return(
    <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => play(e)}>
      <img src={img} alt="The Weirdos"></img>
      <Details>
        <div>
          <span></span><br/>
          <h1>{name}</h1>
        </div>
        <div>
          {/* <span>Price</span>
          <Price>
            <img src={ETH} alt='ETH'/>
            <h1>{Number(price).toFixed(1)}</h1>
          </Price> */}
        </div>
      </Details>
    </ImgContainer>
  )
}

function Showcase() {

  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id='showcase'>
      <Row direction="none" ref={Row1Ref}>
        <NftItem img="https://cdn.discordapp.com/attachments/711196879316189196/1120288503616512020/eupphoriarp.png" name="Euphoria Roleplay" passRef = {Row1Ref}/>
        <NftItem img="https://cdn.discordapp.com/attachments/711196879316189196/1120288503897534597/grindrp.png" name="Grind Roleplay"  passRef = {Row1Ref}/>
        <NftItem img="https://cdn.discordapp.com/attachments/711196879316189196/1120288504165978152/updascoerp.png" name="UpDaScoe Roleplay"  passRef = {Row1Ref}/>
        <NftItem img="https://cdn.discordapp.com/attachments/711196879316189196/1120288504396652544/atlantarp.png" name="Atlanta Roleplay" passRef = {Row1Ref}/>
        <NftItem img="https://cdn.discordapp.com/attachments/711196879316189196/1120288504606371900/ccrp.png" name="Crypto City Roleplay" passRef = {Row1Ref}/>
      </Row>
      <Title>Showcase</Title>
      <Row direction="reverse" ref={Row2Ref}>
      <NftItem img="https://cdn.discordapp.com/attachments/1118669776718405732/1118670396397453342/eclipse_logo_fivem.gif" name="Eclipse Roleplay"  passRef = {Row2Ref}/>
        <NftItem img="https://cdn.discordapp.com/attachments/1112704348380745738/1120071387189624902/512_x_512_2.png" name="Montera Roleplay"  passRef = {Row2Ref}/>
        <NftItem img="https://cdn.discordapp.com/attachments/1116379504848404552/1116437574228115538/logo.png" name="Oblivion City"  passRef = {Row2Ref}/>
        <NftItem img="https://cdn.discordapp.com/attachments/1115282442916475004/1120291950558457906/logo.png" name="Life of Zone RP"  passRef = {Row2Ref}/>
        <NftItem img="https://cdn.discordapp.com/attachments/1120293778754912257/1120294073086005288/outda.png" name="Out Da MUD" passRef = {Row2Ref}/>
      </Row>
    </Section>
  )
}

export default Showcase