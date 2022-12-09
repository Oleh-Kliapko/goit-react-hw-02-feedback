import styled from '@emotion/styled';
import { theme } from '../theme';

export const WrapperWidget = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding-left: ${theme.space.main * 2}px;
`;

export const WrapperButton = styled.div`
  display: flex;
  gap: ${theme.space.main}px;
  margin: 0;
  margin-bottom: ${theme.space.main}px;
  padding: 0;
`;

export const WrapperStatistics = styled.div`
  margin: 0;
  padding: 0;
`;

export const Button = styled.button`
  padding: ${theme.space.secondary}px;
  padding-left: ${theme.space.secondary * 3}px;
  padding-right: ${theme.space.secondary * 3}px;
  font-size: ${theme.typography.text};
  cursor: pointer;
  box-shadow: 1px 3px 5px ${theme.colors.button};
  border: none;
  border-radius: 5px;
  background-color: ${theme.colors.button};

  &:hover,
  &:focus {
    background-color: ${theme.colors.buttonHover};
  }
`;

export const Item = styled.p`
  font-size: ${theme.typography.text};
  color: ${theme.colors.text};
  padding: ${theme.space.secondary}px;
  padding-left: 0;
  margin: 0;
`;
