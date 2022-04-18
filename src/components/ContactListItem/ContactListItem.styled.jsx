import styled from 'styled-components';

export const ListItemStyle = styled.li`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 2px 15px;
  border: 1px solid green;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const NameContactStyle = styled.p`
  margin-right: 10px;
  font-size: 14px;
`;

export const ButtonContactStyle = styled.button`
  padding: 5px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-size: 10px;
  border-radius: 5px;
  border: none;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  font-weight: 400;

  background-color: ${props => props.theme.colors.secondPrimary};

  :hover {
    background-color: royalblue;
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
    color: ${props => props.theme.colors.background};
  }
`;
