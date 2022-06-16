import * as React from 'react';
import styled from 'styled-components';

const ErrorText = styled.div`
  color: ${({ theme }) => theme.colors.red500};
  font-size: 0.7rem;
  margin-top: 4px;
  position: absolute;
  text-align: left;
`;

interface Props {
  errorText: string | undefined;
}

const ErrorMessage: React.FC<Props> = ({ errorText }) => {
  if (!errorText) return null;

  return <ErrorText>{errorText}</ErrorText>;
};

export { ErrorMessage };
