import styled from 'styled-components';

export const StyledFooter = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 4rem;
  width: 80%;
  height: 25px;
  a {
    margin-top: 5px;
    transition: all 0.2s ease-in-out;
    svg {
      transition: fill 0.2s ease-in-out;
    }
    &:hover {
      transform: translateY(-4px);
      filter: drop-shadow(0px 0px 10px #008ab8);
      cursor: pointer;
      svg {
        fill: #00bfff;
      }
    }
  }
`;
