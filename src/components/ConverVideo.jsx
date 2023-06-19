import styled from 'styled-components';
import GIF from '../assets/MAVIX.png';

const VideoContainer = styled.div`
width: 100%;
video{
    width: 100%;
    height:auto;
}

@media (max-width: 64em){
  min-width: 40vh;
}
`;
function ConverVideo() {
  return (
    <VideoContainer><img src={GIF}/></VideoContainer>
  )
}

export default ConverVideo