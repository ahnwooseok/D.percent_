import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Anchor = styled.a`
  padding: 0 15px;
  color: ${({ selected }) => (selected ? '#0dff8b' : '#ffffff')};
  font-family: Noto Sans KR, sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
`;
