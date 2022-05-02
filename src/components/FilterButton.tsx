import styled from 'styled-components';

interface FilterButtonProps {
  text: string;
  filterHooks: [string, React.Dispatch<React.SetStateAction<string>>];
}

export const ButtonStyle = styled.button`
  background: none;
  border: 0;
  padding: 0;
  margin: 0 0.5625rem;
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-weight: 700;
  letter-spacing: -0.194444px;
  color: ${({ disabled }) => (disabled ? '#3A7CFD' : '#9495A5')};
  ${({ disabled }) =>
    disabled
      ? ''
      : `&:hover {
         text-decoration: underline;
         color: #494c6b;
         cursor: pointer;
       }`}

  @media (min-width: 23.5rem) {
    font-size: 0.875rem;
    line-height: 0.875rem;
  }
`;

const FilterButton = ({ text, filterHooks }: FilterButtonProps) => {
  const lowerCaseText = text.toLowerCase();
  const [filter, setFilter] = filterHooks;
  return (
    <ButtonStyle
      disabled={filter === lowerCaseText}
      onClick={() => setFilter(lowerCaseText)}
    >
      {text}
    </ButtonStyle>
  );
};

export default FilterButton;
