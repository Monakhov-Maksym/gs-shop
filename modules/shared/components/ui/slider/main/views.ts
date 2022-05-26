import styled from 'styled-components';

interface Props {
  active: boolean;
}

export const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  transition-duration: 0.5s;

  opacity: ${({ active }: Props) => (active ? '1' : '0')};
  transform: ${({ active }: Props) => active && 'scale(1.05)'};
`;

export const ArrowButton = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
