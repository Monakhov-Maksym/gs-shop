import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 200px;
  position: relative;
  border-radius: 10px;
  padding: 10px 10px 40px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  background: ${({ theme }) => theme.colors.white};
`;

export const PTWrapper = styled.div`
  display: flex;
`;

export const Price = styled.p`
  font-size: 34px;
  font-weight: 800;
  line-height: 34px;
  margin-top: 10px;

  color: ${({ theme }) => theme.colors.blue600};
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 28px;

  ${({ theme }) => theme.templates.ellipsis}
  color: ${({ theme }) => theme.colors.gray400};
`;

export const Photo = styled.img`
  width: 112px;
  height: 112px;
  object-fit: cover;
  border-radius: 100%;
`;

export const ButtonsWrapper = styled.div`
  bottom: 10px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 10px;
  max-width: 140px;
`;
