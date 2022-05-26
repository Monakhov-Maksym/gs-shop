import React from 'react';
// hooks
import { useRouter } from 'next/router';
// components
import Button from '@md-ui/button/main';
// views
import { Wrapper, DWrapper, ButtonWrapper, PreviewPhoto } from './views';

interface Props {
  img: string;
  name: string;
  price: number;
  id: number;
  deleteProductFromCart: (id: number) => void;
}

const CardForCart: React.FC<Props> = ({ deleteProductFromCart, img, name, price, id }) => {
  const { push } = useRouter();

  const onClick = () => push(`/details/${id}`);

  return (
    <Wrapper>
      <div>
        <PreviewPhoto onClick={onClick} src={img} alt='img' />

        <DWrapper>
          <div>Name: {name}</div>
          <div>Price: {price}</div>
        </DWrapper>
      </div>

      <ButtonWrapper>
        <Button onClick={() => deleteProductFromCart(id)} title={'Delete'} type={'delete'} key={id} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default CardForCart;
