import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const NameUser = styled.p`
  margin-right: 10px;
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
`;

export const ButtonExit = styled.button`
  padding: 5px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-size: 14px;
  border-radius: 5px;
  border: none;
  color: ${props => props.theme.colors.background};
  cursor: pointer;
  font-weight: 400;

  background-color: ${props => props.theme.colors.primary};

  :hover {
    background-color: ${props => props.theme.colors.secondPrimary};
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
    color: ${props => props.theme.colors.text};
  }
`;
