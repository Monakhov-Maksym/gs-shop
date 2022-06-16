import React from 'react';
// libs
import * as yup from 'yup';
// hooks
import { useFormik } from 'formik';
import { useLocalStorage } from '@md-utils/localstorage';
// types
import { Product } from '@md-modules/shared/mock';
// context
import { ControlPanelAPIContext } from '@md-modules/shop/control-panel/layers/api';
// components
import Modal from '@md-ui/modal';
import Select, { OnChangeValue } from 'react-select';
import Button from '@md-ui/button/main';
import { TextField } from '@md-ui/text-field';
// views
import { InputWrapper, Wrapper } from '@md-modules/shop/control-panel/layers/presentation/components/trip-modal/views';
import { OPTIONS, OptionType } from '@md-ui/headers/components/menu/constants';
// utils
import { getSelectStyles } from '@md-ui/headers/components/menu/views';

export type ModalTypes = 'EDIT' | 'CREATE';

interface Props {
  id?: string;
  isOpen: boolean;
  type: ModalTypes;
  toggleModal: () => void;
  defaultValues?: Product;
}

const scheme = yup.object().shape({
  name: yup.string().min(5, 'Too Short!').required('Required'),
  price: yup.number().required('Required').positive('Positive Only!'),
  descriptions: yup.string().min(5, 'Too Short!').required('Required'),
  category: yup.object().shape({
    value: yup.string(),
    label: yup.string()
  })
});

const TripModal: React.FC<Props> = ({ toggleModal, isOpen, id, type, defaultValues }) => {
  const { createTrip, editTrip } = React.useContext(ControlPanelAPIContext);
  const { getTrips } = useLocalStorage<Product>();

  const randomNumber = Math.floor(Math.random() * 100);

  const modalTitle = type === 'CREATE' ? 'Crate Product' : 'Update Product';

  const formik = useFormik({
    initialValues: {
      name: '',
      price: 50,
      descriptions: '',
      category: OPTIONS[0]
    },
    validationSchema: scheme,
    onSubmit: (values) => {
      const product = getTrips()?.find((item) => item.id === id);

      switch (type) {
        case 'CREATE':
          createTrip({
            ...values,
            category: values.category.value,
            img: `https://picsum.photos/600/700?random=${randomNumber}`,
            isNew: true,
            isStock: false
          });
          break;
        case 'EDIT':
          // @ts-ignore
          editTrip({
            ...product,
            ...values,
            category: values.category.value
          });
          break;
      }

      toggleModal();
    }
  });

  React.useEffect(() => {
    if (type === 'EDIT') {
      if (defaultValues) {
        formik.setValues({
          ...defaultValues,
          category: OPTIONS.find((item) => defaultValues.category === item.value) as OptionType
        });
      }

      return;
    }

    formik.handleReset({
      name: '',
      price: 50,
      descriptions: '',
      category: OPTIONS[0]
    });
  }, [isOpen, defaultValues]);

  const onSelect = (option: OptionType | OnChangeValue<OptionType, boolean> | null) => {
    if (!option) return;

    if (!Array.isArray(option)) {
      formik.setFieldValue('category', option as OptionType);
    }
  };

  return (
    <Modal title={modalTitle} closeButton isOpen={isOpen} toggleModal={toggleModal}>
      <Wrapper>
        <InputWrapper>
          <TextField
            name='name'
            label='Name'
            value={formik.values.name}
            onChange={formik.handleChange}
            errorText={formik.errors.name}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            name='descriptions'
            label='Description'
            onChange={formik.handleChange}
            value={formik.values.descriptions}
            errorText={formik.errors.descriptions}
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            name='price'
            label='Price $'
            type='number'
            value={formik.values.price}
            onChange={formik.handleChange}
            errorText={formik.errors.price}
          />
        </InputWrapper>
        <InputWrapper>
          <Select
            name='category'
            options={OPTIONS}
            onChange={onSelect}
            styles={getSelectStyles()}
            value={formik.values.category}
            defaultValue={formik.values.category}
          />
        </InputWrapper>

        <Button onClick={formik.handleSubmit} type='submit' title='Submit' />
      </Wrapper>
    </Modal>
  );
};

export default TripModal;
