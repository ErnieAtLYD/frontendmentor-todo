import styled from 'styled-components';
import { FooterText } from './atoms/typography';

interface FilterButtonProps {
  text: string;
  filterHooks: [string, React.Dispatch<React.SetStateAction<string>>];
}

export const ButtonStyle = styled(FooterText)`
  background: none;
  border: 0;
  color: var(--placeholder-color);
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0;
  margin: 0 0.5625rem;

  &:disabled,
  &[disabled] {
    color: var(--footer-active-color);
  }

  &:hover {
    text-decoration: underline;
    color: var(--list-item-color);
  }
`;

const FilterButton = ({ text, filterHooks }: FilterButtonProps) => {
  const lowerCaseText = text.toLowerCase();
  const [filter, setFilter] = filterHooks;
  return (
    <ButtonStyle
      as="button"
      disabled={filter === lowerCaseText}
      onClick={() => setFilter(lowerCaseText)}
    >
      {text}
    </ButtonStyle>
  );
};

export default FilterButton;
