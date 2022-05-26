import React from 'react';
// hooks
import { useRouter } from 'next/router';
// context
import { ProductsBLContext } from '../../layers/businnes/index';
// components
import Button from '@md-ui/button/main';
// views
import { Wrapper, DWrapper, ButtonWrapper, Title, PreviewPhoto } from './views';

interface Props {
  img: string;
  name: string;
  price: number;
  id: number;
}

const ProductsCard: React.FC<Props> = ({ img, name, price, id }) => {
  const { push } = useRouter();
  const { addToCart } = React.useContext(ProductsBLContext);

  const onClickDetails = () => push(`/details/${id}`);

  return (
    <Wrapper>
      <PreviewPhoto onClick={onClickDetails} src={img} alt='img' />

      <DWrapper>
        <Title>
          <strong>Name:</strong> {name}
        </Title>
        <Title>
          <strong>Price:</strong> {price}
        </Title>
      </DWrapper>

      <ButtonWrapper>
        <Button onClick={() => addToCart(id)} title='Add to cart' />
        <Button onClick={onClickDetails} title='Details' />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ProductsCard;
