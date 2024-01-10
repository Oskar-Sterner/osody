import styled from 'styled-components';

interface StyledProps {
  margintop?: string;
  marginright?: string;
  marginbottom?: string;
  marginleft?: string;
  paddingtop?: string;
  paddingright?: string;
  paddingbottom?: string;
  paddingleft?: string;
  height?: string;
  width?: string;
  borderradius?: string;
}

export const StyledSubmitButton = styled.button<StyledProps>`
  all: unset;
  color: #ffffff;
  font-weight: 600;
  box-sizing: border-box;
  text-align: center;
  margin-top: ${props => props.margintop || '10px'};
  margin-right: ${props => props.marginright || '0'};
  margin-bottom: ${props => props.marginbottom || '0'};
  margin-left: ${props => props.marginleft || '0'};
  padding-top: ${props => props.paddingtop || '0px'};
  padding-right: ${props => props.paddingright || '0px'};
  padding-bottom: ${props => props.paddingbottom || '0px'};
  padding-left: ${props => props.paddingleft || '0px'};
  height: ${props => props.height || '44px'};
  width: ${props => props.width || '100%'};
  border-radius: ${props => props.borderradius || '10px'};
  background: #009acd;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-4px);
    filter: drop-shadow(0px 0px 10px #008ab8);
    cursor: pointer;
    background: #00bfff;
  }
`;
