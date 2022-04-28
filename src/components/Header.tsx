import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 70px;
`;

const BrandTitle = styled.h1`
  font-size: 2.5rem;
  line-height: 2.5rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.9375rem;
  color: #fff;
`;

const ButtonWrapper = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  vertical-align: middle;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <BrandTitle>ToDo</BrandTitle>
      <ButtonWrapper>
        <svg
          aria-describedby='darkmode-icon'
          height={26}
          width={26}
          viewBox='0 0 26 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title id='darkmode-icon'>Dark Mode</title>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M15.3717 0.215831C10.5931 1.19962 7 5.4302 7 10.5C7 16.299 11.701 21 17.5 21C20.4958 21 23.1986 19.7454 25.1116 17.7328C23.2191 22.5722 18.5098 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C13.81 0 14.6027 0.0740788 15.3717 0.215831Z'
            fill='white'
          />
        </svg>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;
