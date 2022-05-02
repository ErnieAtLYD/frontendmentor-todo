import { IListItem } from '../interfaces';
import styled from 'styled-components';
import FilterButton, { ButtonStyle } from './FilterButton';

interface FooterAreaProps {
  items: IListItem[];
  removeCompleted: () => void;
  filterHooks: [string, React.Dispatch<React.SetStateAction<string>>];
}

const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  vertical-align: middle;
  justify-content: space-between;
  align-items: center;
  height: 3.125rem;
  border-radius: 0 0 5px 5px;
  background-color: ${({ theme }) => theme.listItemBgColor};

  @media (min-width: 23.5rem) {
    height: 4.0625rem;
  }
`;

const ItemsLeft = styled.li`
  display: inline-block;
  color: ${({ theme }) => theme.placeholderColor};
  font-size: 0.75rem;
  line-height: 0.75rem;
  letter-spacing: -0.194444px;
  margin-left: 1.5625rem;

  @media (min-width: 23.5rem) {
    font-size: 0.875rem;
    line-height: 0.875rem;
  }
`;

const Filters = styled.li`
  display: none;
  @media (min-width: 23.5rem) {
    display: block;
  }
`;

const ClearButton = styled(ButtonStyle)`
  font-weight: 400;
  color: ${({ theme }) => theme.placeholderColor};
  margin-right: 1.5625rem;
  font-size: 0.75rem;
  line-height: 0.75rem;

  @media (min-width: 23.5rem) {
    font-size: 0.875rem;
    line-height: 0.875rem;
  }
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
        <ItemsLeft>{activeItems()}</ItemsLeft>
        <Filters>
          <FilterButton text="All" filterHooks={filterHooks} />
          <FilterButton text="Active" filterHooks={filterHooks} />
          <FilterButton text="Completed" filterHooks={filterHooks} />
        </Filters>
        <li>
          <ClearButton onClick={removeCompleted}>Clear Completed</ClearButton>
        </li>
      </List>
    </footer>
  );
};

export default FooterArea;
