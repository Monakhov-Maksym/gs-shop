import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  max-width: 800px;
  max-height: 600px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const PreviewPhoto = styled.img`
  height: 300px;
  padding: 2px;
  cursor: pointer;
  object-fit: cover;
`;

export const DWrapper = styled.div`
  width: 100%;
  display: flex;
  div {
    padding: 0 50px 0 0;
  }
`;

export const ButtonWrapper = styled.div``;
