import React from 'react';
// types
import { Product } from '@md-modules/shared/mock';
// components
import IconButton from '@md-ui/button/icon-button';
// views
import {
  Photo,
  Wrapper,
  ButtonsWrapper,
  Title,
  PTWrapper,
  Price
} from '@md-modules/shop/control-panel/layers/presentation/components/card/views';

interface Props {
  data: Product;
  onEdit: (data: Product) => void;
  onRemove: (id: string) => void;
}

const Card: React.FC<Props> = ({ data, onRemove, onEdit }) => {
  return (
    <Wrapper>
      <PTWrapper>
        <Photo src={data.img} />
        <Title>{data.name}</Title>
      </PTWrapper>

      <Price>${data.price}</Price>

      <ButtonsWrapper>
        <IconButton preset='trash' onClick={() => onRemove(data.id as string)} />
        <IconButton preset='bluePencil' onClick={() => onEdit(data)} />
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Card;
