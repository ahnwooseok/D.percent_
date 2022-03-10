import styled from 'styled-components';

export const Wrapper = styled.main`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: -1;
`;
export const MainTop = styled.div`
  display: flex;
  padding-top: 2800px;
`;


export const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 156px;
  padding-right: 112px;
  justify-content: center;
  align-items: center;
`;

export const MainRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 179px;

`;

export const MainBottom = styled.div`
  padding-top: 63px;
`;


export const MainContents = styled.p`
  color: #ffffff;
  font-family: Noto Sans KR, sans-serif;
  font-size: 18px;
  line-height: 155%;
  font-style: normal;
`;

export const Challenge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 168px;
`;

export const Line = styled.div`
  width: 257px;
  height: 0px;
  
  padding-top: 2px;
  transform: rotate(90deg);
  //border: 2px solid;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.37) 37.5%, #FFFFFF 56.67%, rgba(255, 255, 255, 0.46) 79.58%, rgba(255, 255, 255, 0) 100%);
  margin-top: 36px;
  margin-bottom: 36px;


`;
export const Title = styled.h1`
  color: #ffffff;
  font-family: Noto Sans KR, sans-serif;
  font-size: 36px;
  line-height: 150%;
  font-weight: bold;
  font-style: normal;
  
  padding-top: 125px;
`;

export const ChallengeBox = styled.div`
  display: flex;
  padding-top: 128px;
  margin-bottom: 120px;
`;


export const ChallengeCircle = styled.div`
  width: 316px;
  height: 316px;
  mix-blend-mode: normal;
  /* sub */
  //border: 1px solid #FFFA8B;
  border: 1px solid;
  color: #ffffff;
  border-radius: 200px;
  box-sizing: border-box;
`;

export const ChallengeCircleTitle = styled.h1`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top : 38px;
  
  color: #ffffff;
  font-family: Noto Sans KR, sans-serif;
  font-style: normal;
  line-height: 150%;
  font-weight: bold;
  font-size: 21px;
`;

export const ChallengeCircleSubTitle = styled.h2`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top : 38px;

  color: #ffffff;
  font-family: Noto Sans KR, sans-serif;
  font-style: normal;
  line-height: 150%;
  font-weight: 500;
  font-size: 21px;
`;

export const ChallengeCircleContent = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top : 40px;
  
  color: #ffffff;
  font-family: Noto Sans KR, sans-serif;
  font-style: normal;
  line-height: 150%;
  font-weight: 500;
  font-size: 12px;
  //letter-spacing: 0.5px;
`;

export const Activity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ActivityTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 89px;
`;
export const Box73 = styled.div`
  width: 73px;
`;

export const ActivityBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 45px;
`;

export const ActivityContent = styled.div`
  color: #ffffff;
  font-family: Noto Sans KR, sans-serif;
  font-style: normal;
  line-height: 150%;
  font-weight: 350;
  font-size: 24px;
  position: relative;
`;


export const Process = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  padding-top: 14px;
  position:relative;           //here
`;

export const RowLine = styled.div`
  
  width: 1034px;
  height: 0px;
  
  background: linear-gradient(270deg, #0DFF8B 0%, #FFFA8B 100%, #FFFA8B 100%);
  border: none;
  border-top: 2px dotted #26FF97;
  
`;

export const Box103 = styled.div`
  height: 103px;
`;

export const ProcessBox = styled.div`
  display: flex;
  position: relative;
  width:100%;        // here!
  justify-content: center;
  align-items: center;
  z-index: 3;   
`;

export const Balloon = styled.div`
  position: relative;
  background: #26FF97;
  border-radius: .4em;
  width: 218px;
  height: 69px;
`;
export const BalloonAfter = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-bottom-color: #26FF97;
  border-top: 0;
  margin-left: -8px;
  margin-top: -8px;
`;
export const BalloonContent = styled.div`
  padding: 25px 10px;
  text-align: center;
  align-items: center;
  font-family: Noto Sans KR, sans-serif;
`;

export const BalloonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin:32px 10px;
`;

export const BalloonDetailBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: .4em;
  margin-top: 20px;
  background: #ffffff;
  
  width: 218px;
  height: 215px;
`;

export const BalloonDetailContent = styled.div`
  padding: 0px 10px;
  text-align: center;
  align-items: center;
`;

export const BalloonCircle = styled.div`
  position: relative;
  background: #29B270;
  border-radius: .4em;
  width: 10px;
  height: 10px;
  margin-bottom: 42px;
  
`;
export const Found = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 146px;
`;
export const FoundRowLine = styled.div`

  width: 1280px;
  height: 0px;

  padding-top: 2px;
  
  border: 1px;
  background: #404040;
`;

export const FoundBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 38px;
  
`;
export const FoundContent = styled.div`
  display: flex;
  //justify-content: center;
  justify-items: center;
  vertical-align: center;
  //align-items: center;
  //text-align: center;
  flex-direction: column;
`;
export const FoundColumnLine = styled.div`
  width: 276px;
  height: 0px;
  
  padding-top: 1px;
  margin-top: 64px;
  margin-left: 223px;
  transform: rotate(90deg);
  //border: 0.5px solid;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.37) 37.5%, #FFFFFF 56.67%, rgba(255, 255, 255, 0.46) 79.58%, rgba(255, 255, 255, 0) 100%);


`;