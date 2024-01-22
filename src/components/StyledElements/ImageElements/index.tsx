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
  calculatedheight?: string;
  width?: string;
  borderradius?: string;
}

export const StyledImg = styled.img<StyledProps>`
  margin-top: ${props => props.margintop || '0'};
  margin-right: ${props => props.marginright || '0'};
  margin-bottom: ${props => props.marginbottom || '0'};
  margin-left: ${props => props.marginleft || '0'};
  padding-top: ${props => props.paddingtop || '0'};
  padding-right: ${props => props.paddingright || '0'};
  padding-bottom: ${props => props.paddingbottom || '0'};
  padding-left: ${props => props.paddingleft || '0'};
  height: ${props => props.height || 'auto'};
  height: ${({ calculatedheight }) => `calc(${calculatedheight} - 54px)`};
  width: ${props => props.width || 'auto'};
  border-radius: ${props => props.borderradius || '15px'};
`;
