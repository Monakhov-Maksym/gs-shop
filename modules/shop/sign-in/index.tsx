import React from 'react';
// hooks
import { useRouter } from 'next/router';
// components
import Button from '@md-ui/button/main';
import { TextField } from '@md-ui/text-field';
// utils
import { cookiesManager } from '@md-utils/cookies';
// views
import { Wrapper, InnerWrapper, ContainerWrapper, ButtonWrapper } from '@md-modules/shop/sign-in/views';

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

const SignIn = () => {
  const { push } = useRouter();
  const { getToken, setToken } = cookiesManager();

  const [error, setError] = React.useState('');
  const [secret, setSecret] = React.useState('');

  React.useEffect(() => {
    if (getToken()) {
      push('/control-panel');
    }
  }, []);

  const onEnter = () => {
    if (secret === secretKey) {
      push('/control-panel');

      setToken(secret);

      return;
    }

    setError('Invalid key');
  };

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecret(event.target.value);

    setError('');
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <ContainerWrapper>
          <TextField
            errorText={error}
            value={secret}
            onChange={onChangeInput}
            placeholder='Enter admin-secret'
          ></TextField>

          <ButtonWrapper>
            <Button title='Enter' onClick={onEnter} />
          </ButtonWrapper>
        </ContainerWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default SignIn;
