import styled from 'styled-components';

export const Wrapper = styled.main`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-family: Noto Sans KR, sans-serif;
  font-size: 64px;
`;
export const SubTitle = styled.h2`
  color: #dadada;
  font-weight: 350;
  font-family: Noto Sans KR, sans-serif;
  font-size: 16px;
  margin-top: 14px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 125px;
`;

export const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 52px;
  width: 648px;
  height: 324px;
`;

export const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: #0dff8b;
  font-family: Noto Sans KR, sans-serif;
  border-radius: 8px;
  width: 140px;   //128px
  height: 44px;
  padding: 8px 10px;
  color: #333333;
  font-size: 14px;
  margin-top: 50px;
  font-weight: 500;
`;

export const Background = styled.div`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.2;
`;