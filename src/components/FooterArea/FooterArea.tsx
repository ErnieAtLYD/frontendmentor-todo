import { IListItem } from '../../interfaces';
import FilterButton from '../FilterButton';
import { List, ItemsLeft, Filters, ClearButton } from './styles';

interface FooterAreaProps {
  items: IListItem[];
  removeCompleted: () => void;
  filterHooks: [string, React.Dispatch<React.SetStateAction<string>>];
}

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
