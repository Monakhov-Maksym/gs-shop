import styled from 'styled-components';

export const Wrapper = styled.form`
  width: 100%;
  height: 100%;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: unset;
    padding: 40px;
  }
`;

export const InputWrapper = styled.div`
  margin: 20px 0;
`;
