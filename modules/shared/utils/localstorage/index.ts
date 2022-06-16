import { Product } from '@md-modules/shared/mock';
import { uniqBy } from 'lodash';

export const useLocalStorage = <S>() => {
  const getProducts = () => {
    try {
      return JSON.parse(localStorage.getItem('CartState') as string) || [];
    } catch (err) {
      console.error(err);
    }
  };

  const addProduct = (cartProducts: S[], products: S) => {
    localStorage.setItem('CartState', JSON.stringify([...cartProducts, products]));
  };

  const removeProduct = (filteredCart: S[]) => {
    localStorage.setItem('CartState', JSON.stringify(filteredCart));
  };

  const getTrips = (): Product[] | undefined => {
    try {
      return JSON.parse(localStorage.getItem('trips') as string) || [];
    } catch (err) {
      console.error(err);
    }
  };

  const setTrips = (trips: Product[]) => {
    const oldTrips = getTrips();

    const tripsArray = oldTrips ? [...trips, ...oldTrips] : trips;

    const filteredTrips = uniqBy(tripsArray, (item) => item.id);

    localStorage.setItem('trips', JSON.stringify(filteredTrips));
  };

  const addTrip = (trip: Product) => {
    const trips = getTrips() || [];

    localStorage.setItem('trips', JSON.stringify([trip, ...trips]));
  };

  const removeTrip = (filteredTrips: Product[]) => {
    localStorage.setItem('trips', JSON.stringify(filteredTrips));
  };

  const updateTrip = (data: Product) => {
    const trips = getTrips();

    const editTrip = trips?.map((trip) => (trip.id === data.id ? { ...data } : trip));

    localStorage.setItem('trips', JSON.stringify(editTrip));
  };

  return {
    setTrips,
    removeTrip,
    addTrip,
    updateTrip,
    getTrips,
    addProduct,
    removeProduct,
    getProducts
  };
};
