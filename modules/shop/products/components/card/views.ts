import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  padding: 10px;
  margin: 10px;
  background: white;
  position: relative;
  border-radius: 10px;
  transition: box-shadow 0.1s linear;

  &:hover {
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    transition: box-shadow 0.2s linear;
  }
`;

export const PreviewPhoto = styled.img`
  width: 100%;
  height: 300px;
  padding: 2px;
  cursor: pointer;
  object-fit: cover;
`;

export const DWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  margin: 0 0 12px 0;

  color: ${({ theme }) => theme.colors.gray600};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;

  padding: 12px 0;
`;
