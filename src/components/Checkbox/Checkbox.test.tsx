import {render, screen, fireEvent} from '@testing-library/react';
import Checkbox from './Checkbox';

it('renders without crashing', () => {
  render(
    <Checkbox
      item={{id: '1', text: 'lorem', completed: false}}
      toggleCheckbox={() => {}}
    />
  );
  expect(screen.getByRole('checkbox')).toBeInTheDocument();
});

it('renders with correct checked state', () => {
  render(
    <Checkbox
      item={{id: '1', text: 'lorem', completed: true}}
      toggleCheckbox={() => {}}
    />
  );
  expect(screen.getByRole('checkbox')).toBeChecked();
});

it('renders with correct unchecked state', () => {
  render(
    <Checkbox
      item={{id: '1', text: 'lorem', completed: false}}
      toggleCheckbox={() => {}}
    />
  );
  expect(screen.getByRole('checkbox')).not.toBeChecked();
});

it('calls toggleCheckbox on click', () => {
  const toggleCheckbox = jest.fn();
  render(
    <Checkbox
      item={{id: '1', text: 'lorem', completed: false}}
      toggleCheckbox={toggleCheckbox}
    />
  );
  fireEvent.click(screen.getByRole('checkbox'));
  expect(toggleCheckbox).toHaveBeenCalledTimes(1);
});
