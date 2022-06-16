import React from 'react';
// libs
import styled from 'styled-components';

export const LabelWrapper = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

interface Props {
  label?: string;
}

const Label: React.FC<Props> = ({ label }) => {
  if (!label) {
    return null;
  }

  return (
    <LabelWrapper>
      <Title>{label}</Title>
    </LabelWrapper>
  );
};

export default Label;
