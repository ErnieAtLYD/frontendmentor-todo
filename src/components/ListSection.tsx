import List from './List';
import FooterArea from './FooterArea';
import { IListItem } from '../interfaces';
import styled from 'styled-components';

interface ListSectionProps {
  items: IListItem[];
  filter: string;
  toggleCheckbox: (id: string) => void;
  deleteItem: (id: string) => void;
  removeCompleted: () => void;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const ListSectionWrapper = styled.article`
  box-shadow: 0px 35px 50px -15px ${({ theme }) => theme.listShadow};
  border-radius: 5px;
`;

const ListSection = ({
  items,
  filter,
  toggleCheckbox,
  deleteItem,
  removeCompleted,
  setFilter,
}: ListSectionProps) => {
  return (
    <ListSectionWrapper>
      <List
        filter={filter}
        items={items}
        toggleCheckbox={toggleCheckbox}
        deleteItem={deleteItem}
      />
      <FooterArea
        items={items}
        removeCompleted={removeCompleted}
        filterHooks={[filter, setFilter]}
      />
    </ListSectionWrapper>
  );
};

export default ListSection;
