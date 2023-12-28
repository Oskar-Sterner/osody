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
  underline?: boolean;
}

export const StyledH1 = styled.h1<StyledProps>`
  font-size: 75px;
  font-weight: 400;
  line-height: 37.5px;
  letter-spacing: 0%;
  margin-top: ${props => props.margintop || '0'};
  margin-right: ${props => props.marginright || '0'};
  margin-bottom: ${props => props.marginbottom || '0'};
  margin-left: ${props => props.marginleft || '0'};
  padding-top: ${props => props.paddingtop || '0'};
  padding-right: ${props => props.paddingright || '0'};
  padding-bottom: ${props => props.paddingbottom || '0'};
  padding-left: ${props => props.paddingleft || '0'};
  text-decoration: ${props => (props.underline ? 'underline #00BFFF' : 'none')};
`;

export const StyledH2 = styled.h2<StyledProps>`
  font-size: 36px;
  font-weight: 500;
  line-height: 54px;
  letter-spacing: 0%;
  margin-top: ${props => props.margintop || '0'};
  margin-right: ${props => props.marginright || '0'};
  margin-bottom: ${props => props.marginbottom || '0'};
  margin-left: ${props => props.marginleft || '0'};
  padding-top: ${props => props.paddingtop || '0'};
  padding-right: ${props => props.paddingright || '0'};
  padding-bottom: ${props => props.paddingbottom || '0'};
  padding-left: ${props => props.paddingleft || '0'};
  text-decoration: ${props => (props.underline ? 'underline #00BFFF' : 'none')};
`;

export const StyledH3 = styled.h3<StyledProps>`
  font-size: 27px;
  font-weight: 500;
  line-height: 40.5px;
  letter-spacing: 0%;
  margin-top: ${props => props.margintop || '0'};
  margin-right: ${props => props.marginright || '0'};
  margin-bottom: ${props => props.marginbottom || '0'};
  margin-left: ${props => props.marginleft || '0'};
  padding-top: ${props => props.paddingtop || '0'};
  padding-right: ${props => props.paddingright || '0'};
  padding-bottom: ${props => props.paddingbottom || '0'};
  padding-left: ${props => props.paddingleft || '0'};
  text-decoration: ${props => (props.underline ? 'underline #00BFFF' : 'none')};
`;

export const StyledP = styled.p<StyledProps>`
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0%;
  margin-top: ${props => props.margintop || '0'};
  margin-right: ${props => props.marginright || '0'};
  margin-bottom: ${props => props.marginbottom || '0'};
  margin-left: ${props => props.marginleft || '0'};
  padding-top: ${props => props.paddingtop || '0'};
  padding-right: ${props => props.paddingright || '0'};
  padding-bottom: ${props => props.paddingbottom || '0'};
  padding-left: ${props => props.paddingleft || '0'};
  text-decoration: ${props => (props.underline ? 'underline #00BFFF' : 'none')};
`;

export const StyledSmallP = styled.p<StyledProps>`
  font-size: 13px;
  font-weight: 400;
  line-height: 19.5px;
  letter-spacing: 0%;
  margin-top: ${props => props.margintop || '0'};
  margin-right: ${props => props.marginright || '0'};
  margin-bottom: ${props => props.marginbottom || '0'};
  margin-left: ${props => props.marginleft || '0'};
  padding-top: ${props => props.paddingtop || '0'};
  padding-right: ${props => props.paddingright || '0'};
  padding-bottom: ${props => props.paddingbottom || '0'};
  padding-left: ${props => props.paddingleft || '0'};
  text-decoration: ${props => (props.underline ? 'underline #00BFFF' : 'none')};
`;
