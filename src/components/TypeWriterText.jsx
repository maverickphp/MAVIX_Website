import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from './Button';

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${props => props.theme.text};
  align-self: flex-start;

  span{
    text-transform: useUpdate;
    font-family:'Akaya Telivigala', cursive;
}
.text-1{
    color: black;
}
.text-2{
    color: black;
}
.text-3{
    color: black;
}

@media (max-width: 70em){
  font-size: ${(props) => props.theme.fontxl};
}
@media (max-width: 48em){
  align-self: center;
  text-align: center;
}
@media (max-width: 40em){
  width: 90%;
}

`;

const SubTitle = styled.h3`
font-size: ${(props)=>props.theme.fontlg};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight:600;
margin-bottom:1rem;
width: 80%;
align-self: flex-start;

@media (max-width: 40em){
  font-size: ${(props) => props.theme.fontmd};
}

@media (max-width: 48em){
  align-self: center;
  text-align: center;
}


`;

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;

@media (max-width: 48em){
  align-self: center;
  text-align: center;

  button{
    margin: 0 auto;
  }
}
`;



function TypeWriterText() {
  return (
    <>
        <Title>
      Discover a new era of FiveM
      <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
        onInit={(typewriter) => {
          typewriter.typeString('<span class="text-1">ESX Framework</span>')
          .pauseFor(2000)
          .deleteAll()
          .typeString('<span class="text-2">Optm Scripting</span>')
          .pauseFor(2000)
          .deleteAll()
          .typeString('<span class="text-3">Discord Support</span>')
          .pauseFor(2000)
          .deleteAll()
          .start()
        }}
      />
    </Title>
    <SubTitle>Bored Of Pre Made Resouces ? Try Something New</SubTitle>
    {/* <ButtonContainer>
        <Button text="Explore" link="#about"/>
    </ButtonContainer> */}
    </>
  );
}

export default TypeWriterText;
