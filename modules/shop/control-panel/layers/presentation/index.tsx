import React from 'react';
// hooks
import { useRouter } from 'next/router';
// context
import { ControlPanelAPIContext } from '@md-modules/shop/control-panel/layers/api';
// types
import { Product } from '@md-modules/shared/mock';
// components
import Button from '@md-ui/button/main';
import Card from '@md-modules/shop/control-panel/layers/presentation/components/card';
import TripModal, { ModalTypes } from '@md-modules/shop/control-panel/layers/presentation/components/trip-modal';
// views
import { CardsWrapper, CreateButtonWrapper } from '@md-modules/shop/control-panel/layers/presentation/views';
// utils
import { cookiesManager } from '@md-utils/cookies';

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

const ControlPanelPresentation = () => {
  const { push } = useRouter();
  const { getToken, removeToken } = cookiesManager();

  const { trips, deleteTrip } = React.useContext(ControlPanelAPIContext);

  // states
  const [currentTrip, setCurrentTrip] = React.useState<Product>();
  const [createModalState, setCreateModalState] = React.useState<{ type: ModalTypes; status: boolean }>({
    type: 'CREATE',
    status: false
  });

  // methods
  const toggleModal = (type: ModalTypes) => setCreateModalState((prevState) => ({ type, status: !prevState.status }));
  const onEdit = (data: Product) => {
    toggleModal('EDIT');

    setCurrentTrip(data);
  };
  const onCreate = () => toggleModal('CREATE');

  // effect's
  React.useEffect(() => {
    if (getToken() !== secretKey) {
      push('/');

      removeToken();
    }
  }, []);

  return (
    <>
      <CreateButtonWrapper>
        <Button title='Create Product' onClick={onCreate} />
      </CreateButtonWrapper>

      <CardsWrapper>
        {trips?.map((trip) => (
          <Card onEdit={onEdit} key={trip.id} data={trip} onRemove={deleteTrip} />
        ))}
      </CardsWrapper>

      <TripModal
        toggleModal={onCreate}
        defaultValues={currentTrip}
        type={createModalState.type}
        id={currentTrip?.id as string}
        isOpen={createModalState.status}
      />
    </>
  );
};

export default ControlPanelPresentation;
