import styled from 'styled-components';

export const StyledNavbar = styled.div`
  width: 270px;
  height: 50px;
  background: rgba(35, 35, 35, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  place-self: end;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  a {
    margin-top: 5px;
    transition: all 0.2s ease-in-out;
    svg {
      transition: fill 0.2s ease-in-out;
    }
    svg.active {
      fill: #00bfff !important;
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
