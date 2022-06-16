import * as React from 'react';
// utils
import { uuid } from 'uuidv4';
import { useLocalStorage } from '@md-utils/localstorage';
// types
import { Categories, Product } from '@md-modules/shared/mock';

export interface CreateTripInput {
  name: string;
  id?: number | string;
  price: number;
  img: string;
  descriptions: string;
  category: Categories;
  isNew: boolean;
  isStock: boolean;
}

interface Context {
  trips?: Product[];
  deleteTrip: (id: string) => void;
  editTrip: (data: CreateTripInput) => void;
  createTrip: (data: CreateTripInput) => void;
}

const ControlPanelAPIContext = React.createContext<Context>({
  trips: [],
  editTrip: () => {},
  deleteTrip: () => {},
  createTrip: () => {}
});

const ControlPanelAPIContextProvider: React.FC = ({ children }) => {
  const { addTrip, getTrips, removeTrip, updateTrip } = useLocalStorage<Product>();

  const [trips, setTrips] = React.useState<Product[] | undefined>(getTrips());

  const deleteTrip = (tripId: string) => {
    const filteredCart = trips?.filter(({ id }) => id !== tripId);

    removeTrip(filteredCart || []);

    setTrips(getTrips());
  };

  const createTrip = (data: CreateTripInput) => {
    addTrip({ ...data, id: uuid() });

    setTrips(getTrips());
  };

  const editTrip = (data: CreateTripInput) => {
    updateTrip(data as Product);

    setTrips(getTrips());
  };

  return (
    <ControlPanelAPIContext.Provider
      value={{
        trips,
        editTrip,
        createTrip,
        deleteTrip
      }}
    >
      {children}
    </ControlPanelAPIContext.Provider>
  );
};

export { ControlPanelAPIContextProvider, ControlPanelAPIContext };
