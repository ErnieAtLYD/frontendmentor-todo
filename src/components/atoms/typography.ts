import styled from 'styled-components';

export const HeaderText = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2rem;
  letter-spacing: 0.75rem;

  @media (min-width: 23.5rem) {
    font-size: 2.5rem;
    line-height: 2.5rem;
    letter-spacing: 0.9375rem;
  }
`;

export const BodyText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: -0.194444px;
  line-height: 0.75rem;

  @media (min-width: 23.5rem) {
    font-size: 1.125rem;
    line-height: 1.125rem;
    letter-spacing: -0.25px;
  }
`;

export const FooterText = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: -0.194444px;
  line-height: 0.75rem;

  @media (min-width: 23.5rem) {
    font-size: 0.875rem;
    line-height: 0.875rem;
  }
`;
