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
