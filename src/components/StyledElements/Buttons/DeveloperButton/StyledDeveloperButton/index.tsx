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

export const StyledDeveloperButton = styled.a<StyledProps>`
  box-sizing: border-box;
  margin-top: ${props => props.margintop || '0'};
  margin-right: ${props => props.marginright || '0'};
  margin-bottom: ${props => props.marginbottom || '0'};
  margin-left: ${props => props.marginleft || '0'};
  padding-top: ${props => props.paddingtop || '0'};
  padding-right: ${props => props.paddingright || '0'};
  padding-bottom: ${props => props.paddingbottom || '0'};
  padding-left: ${props => props.paddingleft || '0'};
  border-radius: ${props => props.borderradius || '15px'};
  height: ${props => props.height || '52px'};
  width: ${props => props.width || '100px'};
  padding: 0.5rem 1rem;
  background: rgba(35, 35, 35, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #00bfff;
    letter-spacing: 2px;
    border: 1px solid #00bfff;
  }
`;
