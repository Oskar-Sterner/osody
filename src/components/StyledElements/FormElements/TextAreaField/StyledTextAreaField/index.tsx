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

export const StyledTextAreaField = styled.textarea<StyledProps>`
  all: unset;
  display: block;
  box-sizing: border-box;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  color: #dadada;
  margin-top: ${props => props.margintop || '5px'};
  margin-right: ${props => props.marginright || '0'};
  margin-bottom: ${props => props.marginbottom || '15px'};
  margin-left: ${props => props.marginleft || '0'};
  padding-top: ${props => props.paddingtop || '5px'};
  padding-right: ${props => props.paddingright || '5px'};
  padding-bottom: ${props => props.paddingbottom || '5px'};
  padding-left: ${props => props.paddingleft || '5px'};
  height: ${props => props.height || '20dvh'};
  width: ${props => props.width || '100%'};
  border-radius: ${props => props.borderradius || '10px'};
  background: rgba(35, 35, 35, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
