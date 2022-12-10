import styled from '@emotion/styled';
import { theme } from '../theme';

export const WrapperStatistics = styled.div`
  margin: 0;
  padding: 0;
`;

export const Item = styled.p`
  font-size: ${theme.typography.text};
  color: ${theme.colors.text};
  padding: ${theme.space.secondary}px;
  padding-left: 0;
  margin: 0;
`;
