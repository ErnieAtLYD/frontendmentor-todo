import styled from 'styled-components';
import ListItemWrapper from './ListItemWrapper';

interface DeleteIconProps {
  handleClick: () => void;
}

const ButtonWrapper = styled.button.attrs({'data-no-dnd': true})`
  display: inline-block;
  background: transparent;
  border: none;
  cursor: pointer;
  vertical-align: middle;
  margin-right: 1rem;
  visibility: visible;

  @media (min-width: 23.5rem) {
    visibility: hidden;

    ${ListItemWrapper}:hover & {
      visibility: visible;
    }
  }
`;

const DeleteIcon = ({handleClick}: DeleteIconProps) => (
  <ButtonWrapper onClick={handleClick}>
    <svg
      aria-describedby="delete-icon"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="delete-icon">Delete this item</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z"
        fill="#494C6B"
      />
    </svg>
  </ButtonWrapper>
);

export default DeleteIcon;
