import Image from 'next/image';
import Link from 'next/link';

import {
  Wrapper,
  MainTop,
  MainLeft,
  MainRight,
  MainContents,
  MainBottom,
  Line,
  Challenge,
  Title,
  ChallengeCircle,
  ChallengeBox,
  ChallengeCircleTitle,
  ChallengeCircleSubTitle,
  ChallengeCircleContent,
  Activity,
  ActivityTop,
  Box73,
  ActivityBottom,
  ActivityContent,
  Process,
  RowLine,
  Box103,
  Balloon,
  BalloonAfter,
  BalloonContent,
  ProcessBox,
  BalloonBox,
  BalloonDetailBox, BalloonDetailContent, BalloonCircle, FoundRowLine, Found, FoundBox, FoundContent, FoundColumnLine
} from "./styles";


function RecruitMain() {



  return (



    <Wrapper>

      <MainTop>
        <MainLeft>
          <Image src='/assets/images/logo-about.svg' width={428} height={283} />
        </MainLeft>
        <MainRight>
          <MainContents style={{fontSize:"20px"}}>
            <span style={{color: "#0DFF8B"}}>D.PERCENT</span>는 IT 생태계의 주인공인<br/>
            <span style={{fontWeight:"bold"}}>디자이너와 개발자를 위한 모임</span>입니다.<br/><br/>
            <span style={{fontWeight:"bold"}}>D.PERCENT에서</span><br/>
            재능 있는 디자이너와 개발자가 함께 모여<br/>
            자유로운 분위기에서 어울려 <span style={{fontWeight:"bold"}}>의견을 나누고</span><br/>
            <span style={{fontWeight:"bold"}}>도움을 주고받으며 협업하는 과정</span>을 통해<br/>
            원하는 서비스를 제작의 경험을 할 수 있습니다.<br/>
          </MainContents>
        </MainRight>
      </MainTop>

      <MainBottom>
        <MainContents>
          <span style={{color: "#0DFF8B"}}>D.PERCENT</span>의 D는 IT직종의 주인공인 디자이너(Designer)와 개발자(Developer)의 <span style={{fontWeight:"bold"}}>공통인 이니셜</span>에서 착안했습니다.<br/>
          <span style={{fontWeight:"bold"}}>Percent</span>(%)는 보통 0과 1사이를 의미합니다. 이는 <span style={{fontWeight:"bold"}}>이진법의 언어</span>가 0과 1로 이루어져있는 것에서 컴퓨터 언어와 닮아있고,<br/>
          두개의 0이 모여 하나의 기호를 이루는 것 처럼 <span style={{fontWeight:"bold"}}>디자이너와 개발자가 모여 하나의 단체</span>를 이룬다는 것을 상징합니다.<br/>
        </MainContents>
      </MainBottom>

      <Challenge>
        <Line></Line>
        <Title>새롭게 도전하는 우리</Title>


        <ChallengeBox>

          <ChallengeCircle style={{color: "#FFFA8B"}}>
            <ChallengeCircleTitle>VISION</ChallengeCircleTitle>
            <ChallengeCircleSubTitle>미래형 인재의 첫 걸음</ChallengeCircleSubTitle>
            <ChallengeCircleContent>
              재능 공유로 서로의 실력을 향상 시키고,<br/>
              프로젝트 진행을 통해 협업 능력을 배양하며,<br/>
              새로운 서비스를 만들어 내는 경험으로<br/>
              IT 생태계의 인재가 되는 것을 목표로 합니다.
            </ChallengeCircleContent>
          </ChallengeCircle>


          <ChallengeCircle style={{color:"#B9FC8B"}}>
            <ChallengeCircleTitle>ACTIVITY</ChallengeCircleTitle>
            <ChallengeCircleSubTitle>팀별 프로젝트</ChallengeCircleSubTitle>
            <ChallengeCircleContent>
              활동은 '1학기 + 방학 한달' 동안 진행되며<br/>
              팀에 소속되어 한 프로젝트를 완성합니다.<br/>
              또한, 정기적인 전체 모임을 통해<br/>
              성장 과정을 함께 공유합니다.<br/>
            </ChallengeCircleContent>
          </ChallengeCircle>




          <ChallengeCircle style={{color: "#0DFF8B"}}>
            <ChallengeCircleTitle>MERIT</ChallengeCircleTitle>
            <ChallengeCircleSubTitle>경험을 넓히다</ChallengeCircleSubTitle>
            <ChallengeCircleContent>
              같은 관심 분야를 공유하는 다양한 멤버들과<br/>
              소통하는 기회를 얻을 수 있습니다.<br/>
              또한, 타 직군을 이해하고 시야를 넓히는<br/>
              소중한 경험이자, IT 생태계를 이끌<br/>
              통섭형 인재의 밑바탕일 것입니다.<br/>
            </ChallengeCircleContent>
          </ChallengeCircle>

        </ChallengeBox>
      </Challenge>

      <Activity>
        <Title>함께하는 다양한 활동</Title>

        <ActivityTop>
          <Image src='/assets/images/activity1.png' width={410} height={180}/>
          {/*<Image src='/assets/images/activity1.png' width={410} height={180}><h1 style={{color:"#ffffff"}}>dslfs</h1></Image>*/}
          {/*<ActivityContent>다양한 전공의 경험을 공유합니다</ActivityContent>*/}
          <Box73/>
          <Image src='/assets/images/activity2.png' width={410} height={180} />
        </ActivityTop>

        <ActivityBottom>
          <Image src='/assets/images/activity3.png' width={410} height={180} />
          <Box73/>
          <Image src='/assets/images/activity4.png' width={410} height={180} />
        </ActivityBottom>

      </Activity>


      <Process>
        <Title>진행되는 과정</Title>
        <Box103/>

        <ProcessBox>
          <BalloonContent style={{color: "#ffffff", fontSize: "12px", marginLeft:"58px", marginRight:"58px", width:"120px"} }>Teambuilding</BalloonContent>
          <BalloonContent style={{color: "#ffffff", fontSize: "12px", marginLeft:"58px", marginRight:"58px", width:"120px"} }>Search</BalloonContent>
          <BalloonContent style={{color: "#ffffff", fontSize: "12px", marginLeft:"58px", marginRight:"58px", width:"120px"} }>Project progressing</BalloonContent>
          <BalloonContent style={{color: "#ffffff", fontSize: "12px", marginLeft:"58px", marginRight:"58px", width:"120px"} }>The final stage</BalloonContent>
        </ProcessBox>
        <RowLine></RowLine>

        <ProcessBox>

          <BalloonBox>

            {/*<BalloonCircle/>*/}
            <Balloon><BalloonContent style={{fontWeight:"bold", fontSize:"18px"}}>팀 선정</BalloonContent><BalloonAfter/></Balloon>
            <BalloonDetailBox>
              <Image src='/assets/images/process-logo1.png' width={48} height={60} />
              <BalloonDetailContent><ChallengeCircleContent style={{color:"#000", paddingTop:"15px"}}>
                팀 선정은 사전 설문 답변을 바탕으로 디자이너 + 개발자로 구성됩니다. 같은 직군끼리의 팀원은 꾸려오셔도 되지만 타 직군과 매칭은 랜덤으로 진행됩니다.
              </ChallengeCircleContent></BalloonDetailContent>
            </BalloonDetailBox>
          </BalloonBox>

          <BalloonBox>
            {/*<BalloonCircle/>*/}
            <Balloon><BalloonContent style={{fontWeight:"bold", fontSize:"18px"}}>과제 선정</BalloonContent><BalloonAfter/></Balloon>
            <BalloonDetailBox>
              <Image src='/assets/images/process-logo2.png' width={48} height={60} />
              <BalloonDetailContent><ChallengeCircleContent style={{color:"#000", paddingTop:"15px"}}>
                과제는 기수가 시작 될 때 기획단에서 기획한 주제 가운데 원하는 것을 선정해 디자이너와 개발자 분들이 팀을 이뤄 과제를 푸는 형식으로 진행됩니다.
              </ChallengeCircleContent></BalloonDetailContent>
            </BalloonDetailBox>
          </BalloonBox>

          <BalloonBox>
            {/*<BalloonCircle/>*/}
            <Balloon><BalloonContent style={{fontWeight:"bold", fontSize:"18px"}}>협업활동 선정</BalloonContent><BalloonAfter/></Balloon>
            <BalloonDetailBox>
              <Image src='/assets/images/process-logo3.png' width={48} height={60} />
              <BalloonDetailContent><ChallengeCircleContent style={{color:"#000", paddingTop:"15px"}}>
                각자 팀별로 한 주제를 책임지고 한 학기 동안 이끌어나가게 되며, 방학 중에 최종 결과물 발표회를 가지며 한 기수를 마무리 짓게 됩니다.
              </ChallengeCircleContent></BalloonDetailContent>
            </BalloonDetailBox>
          </BalloonBox>

          <BalloonBox>
            {/*<BalloonCircle/>*/}
            <Balloon><BalloonContent style={{fontWeight:"bold", fontSize:"18px"}}>결과물 공유</BalloonContent><BalloonAfter/></Balloon>
            <BalloonDetailBox>
              <Image src='/assets/images/process-logo4.png' width={48} height={60} />
              <BalloonDetailContent><ChallengeCircleContent style={{color:"#000", paddingTop:"15px"}}>
                결과물은 홈페이지 내 아카이빙 공간에 &nbsp; 참여한 기수별로 아카이빙 예정입니다.
              </ChallengeCircleContent></BalloonDetailContent>
            </BalloonDetailBox>
          </BalloonBox>

        </ProcessBox>

      </Process>

      <Found>
        <FoundRowLine/>
        <Title style={{paddingTop:"55px", fontSize:"18px", paddingRight:"800px"}}>Founding member.</Title>
        <FoundBox>
          <FoundContent>
            <Title style={{fontSize:"18px", color:"#0DFF8B",paddingTop:"0px",paddingBottom:"12px",fontWeight:"500"}}>박찬빈</Title>
            <Title style={{fontSize:"18px", color:"#0DFF8B",paddingTop:"0px",paddingBottom:"12px",fontWeight:"500"}}>백윤아</Title>
            <Title style={{fontSize:"18px", color:"#0DFF8B",paddingTop:"0px",paddingBottom:"12px",fontWeight:"500"}}>김예은</Title>
            <Title style={{fontSize:"18px", color:"#0DFF8B",paddingTop:"0px",paddingBottom:"12px",fontWeight:"500"}}>안우석</Title>
            <Title style={{fontSize:"18px", color:"#0DFF8B",paddingTop:"0px",paddingBottom:"12px",fontWeight:"500"}}>이지환</Title>
          </FoundContent>
          <FoundContent style={{marginTop:"7px",paddingLeft:"30px"}}>
            <Title style={{fontSize:"14px",paddingTop:"0px",paddingBottom:"18px",fontWeight:"350"}}>Designer & Crew president</Title>
            <Title style={{fontSize:"14px",paddingTop:"0px",paddingBottom:"18px",fontWeight:"350"}}>Designer</Title>
            <Title style={{fontSize:"14px",paddingTop:"0px",paddingBottom:"18px",fontWeight:"350"}}>Designer</Title>
            <Title style={{fontSize:"14px",paddingTop:"0px",paddingBottom:"18px",fontWeight:"350"}}>Developer</Title>
            <Title style={{fontSize:"14px",paddingTop:"0px",paddingBottom:"18px",fontWeight:"350"}}>Developer</Title>
          </FoundContent>
          <FoundColumnLine/>
          <FoundContent style={{paddingTop:"16px",paddingLeft:"30px"}}>
            <Title style={{fontSize:"14px",paddingTop:"0px",paddingBottom:"21px",fontWeight:"300"}}>건국대학교 커뮤니케이션디자인과</Title>
            <Title style={{fontSize:"14px",paddingTop:"0px",paddingBottom:"21px",fontWeight:"300"}}>건국대학교 산업디자인과</Title>
            <Title style={{fontSize:"14px",paddingTop:"0px",paddingBottom:"21px",fontWeight:"300"}}>건국대학교 커뮤니케이션디자인과</Title>
            <Title style={{fontSize:"14px",paddingTop:"0px",paddingBottom:"21px",fontWeight:"300"}}>건국대학교 컴퓨터공학과</Title>
            <Title style={{fontSize:"14px",paddingTop:"0px",paddingBottom:"21px",fontWeight:"300"}}>건국대학교 컴퓨터공학과</Title>
          </FoundContent>
        </FoundBox>
      </Found>
    </Wrapper>
  );
}

export default RecruitMain;
