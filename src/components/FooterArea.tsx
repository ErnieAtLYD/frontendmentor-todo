import { IListItem } from '../interfaces';
import styled from 'styled-components';
import { FooterText } from './atoms/typography';
import FilterButton, { ButtonStyle } from './FilterButton';

interface FooterAreaProps {
  items: IListItem[];
  removeCompleted: () => void;
  filterHooks: [string, React.Dispatch<React.SetStateAction<string>>];
}

const List = styled.ul`
  align-items: center;
  background-color: var(--list-item-bg-color);
  border-radius: 0 0 5px 5px;
  display: flex;
  height: 3.125rem;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  vertical-align: middle;

  @media (min-width: 23.5rem) {
    height: 4.0625rem;
  }
`;

const ItemsLeft = styled(FooterText)`
  color: var(--placeholder-color);
  display: inline-block;
  margin-left: 1.5625rem;
`;

const Filters = styled.li`
  display: none;
  @media (min-width: 23.5rem) {
    display: block;
  }
`;

const ClearButton = styled(ButtonStyle)`
  margin-right: 1.5625rem;
`;

const FooterArea = ({
  items,
  removeCompleted,
  filterHooks,
}: FooterAreaProps) => {
  const activeItems = (): string => {
    const numItems = items.filter((item) => !item.completed).length;
    return (numItems === 1 ? '1 item' : `${numItems} items`) + ' left';
  };

  return (
    <footer>
      <List>
        <ItemsLeft as="li">{activeItems()}</ItemsLeft>
        <Filters>
          <FilterButton text="All" filterHooks={filterHooks} />
          <FilterButton text="Active" filterHooks={filterHooks} />
          <FilterButton text="Completed" filterHooks={filterHooks} />
        </Filters>
        <li>
          <ClearButton as="button" onClick={removeCompleted}>
            Clear Completed
          </ClearButton>
        </li>
      </List>
    </footer>
  );
};

export default FooterArea;
