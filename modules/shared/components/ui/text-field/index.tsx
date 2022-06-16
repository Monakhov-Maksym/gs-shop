import * as React from 'react';
// components
import { ErrorMessage } from '@md-ui/error-message';
import Label from '@md-ui/text-field/components/label';
// views
import { TextInput, Wrapper } from './views';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorText?: string;
}

const TextField: React.FC<TextFieldProps> = ({ errorText, label, placeholder, ...rest }) => {
  return (
    <Wrapper>
      <Label label={label} />

      <TextInput isError={!!errorText} placeholder={placeholder} {...rest} />

      <ErrorMessage errorText={errorText} />
    </Wrapper>
  );
};

export { TextField };
