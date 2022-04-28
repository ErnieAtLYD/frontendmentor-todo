import { IListItem } from '../interfaces';
import styled from 'styled-components';

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
  height: 4.0625rem;
  border-radius: 0 0 5px 5px;
  background-color: ${({ theme }) => theme.listItemBgColor};
`;

const ItemsLeft = styled.li`
  display: inline-block;
  color: ${({ theme }) => theme.placeholderColor};
  font-size: 0.875rem;
  line-height: 0.875rem;
  letter-spacing: -0.194444px;
  margin-left: 1.5625rem;
`;

const FilterButton = styled.button`
  background: none;
  border: 0;
  padding: 0;
  margin: 0 0.5625rem;
  font-size: 0.875rem;
  line-height: 0.875rem;
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
`;

const ClearButton = styled(FilterButton)`
  font-weight: 400;
  color: ${({ theme }) => theme.placeholderColor};
  margin-right: 1.5625rem;
`;

const FooterArea = ({
  items,
  removeCompleted,
  filterHooks,
}: FooterAreaProps) => {
  const [filter, setFilter] = filterHooks;
  const activeItems = (): string => {
    const numItems = items.filter((item) => !item.completed).length;
    return (numItems === 1 ? '1 item' : `${numItems} items`) + ' left';
  };

  return (
    <footer>
      <List>
        <ItemsLeft>{activeItems()}</ItemsLeft>
        <li>
          <FilterButton
            disabled={filter === 'all'}
            onClick={() => setFilter('all')}
          >
            All
          </FilterButton>
          <FilterButton
            disabled={filter === 'active'}
            onClick={() => setFilter('active')}
          >
            Active
          </FilterButton>
          <FilterButton
            disabled={filter === 'completed'}
            onClick={() => setFilter('completed')}
          >
            Completed
          </FilterButton>
        </li>
        <li>
          <ClearButton onClick={removeCompleted}>Clear Completed</ClearButton>
        </li>
      </List>
    </footer>
  );
};

export default FooterArea;
