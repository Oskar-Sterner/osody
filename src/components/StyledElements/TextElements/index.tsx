import styled from 'styled-components';

interface StyledProps {
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    paddingTop?: string;
    paddingRight?: string;
    paddingBottom?: string;
    paddingLeft?: string;
  }

export const StyledH1 = styled.h1<StyledProps>`
    font-size: 75px;
    font-weight: 400;
    line-height: 37.5px;
    letter-spacing: 0%;
    margin-top: ${props => props.marginTop || '0'};
    margin-right: ${props => props.marginRight || '0'};
    margin-bottom: ${props => props.marginBottom || '0'};
    margin-left: ${props => props.marginLeft || '0'};
    padding-top: ${props => props.paddingTop || '0'};
    padding-right: ${props => props.paddingRight || '0'};
    padding-bottom: ${props => props.paddingBottom || '0'};
    padding-left: ${props => props.paddingLeft || '0'};
`;

export const StyledH2 = styled.h2<StyledProps>`
    font-size: 36px;
    font-weight: 500;
    line-height: 54px;
    letter-spacing: 0%;
    margin-top: ${props => props.marginTop || '0'};
    margin-right: ${props => props.marginRight || '0'};
    margin-bottom: ${props => props.marginBottom || '0'};
    margin-left: ${props => props.marginLeft || '0'};
    padding-top: ${props => props.paddingTop || '0'};
    padding-right: ${props => props.paddingRight || '0'};
    padding-bottom: ${props => props.paddingBottom || '0'};
    padding-left: ${props => props.paddingLeft || '0'};
`;

export const StyledH3 = styled.h3<StyledProps>`
    font-size: 27px;
    font-weight: 500;
    line-height: 40.5px;
    letter-spacing: 0%;
    margin-top: ${props => props.marginTop || '0'};
    margin-right: ${props => props.marginRight || '0'};
    margin-bottom: ${props => props.marginBottom || '0'};
    margin-left: ${props => props.marginLeft || '0'};
    padding-top: ${props => props.paddingTop || '0'};
    padding-right: ${props => props.paddingRight || '0'};
    padding-bottom: ${props => props.paddingBottom || '0'};
    padding-left: ${props => props.paddingLeft || '0'};
`;

export const StyledP = styled.p<StyledProps>`
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0%;
    margin-top: ${props => props.marginTop || '0'};
    margin-right: ${props => props.marginRight || '0'};
    margin-bottom: ${props => props.marginBottom || '0'};
    margin-left: ${props => props.marginLeft || '0'};
    padding-top: ${props => props.paddingTop || '0'};
    padding-right: ${props => props.paddingRight || '0'};
    padding-bottom: ${props => props.paddingBottom || '0'};
    padding-left: ${props => props.paddingLeft || '0'};
`;

export const StyledSmallP = styled.p<StyledProps>`
    font-size: 13px;
    font-weight: 400;
    line-height: 19.5px;
    letter-spacing: 0%;
    margin-top: ${props => props.marginTop || '0'};
    margin-right: ${props => props.marginRight || '0'};
    margin-bottom: ${props => props.marginBottom || '0'};
    margin-left: ${props => props.marginLeft || '0'};
    padding-top: ${props => props.paddingTop || '0'};
    padding-right: ${props => props.paddingRight || '0'};
    padding-bottom: ${props => props.paddingBottom || '0'};
    padding-left: ${props => props.paddingLeft || '0'};
`;
