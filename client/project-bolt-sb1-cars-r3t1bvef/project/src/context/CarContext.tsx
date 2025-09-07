import React, { createContext, useState, useContext } from 'react';
import { Car, Brand, Order } from '../types';
import { cars as initialCars, brands as initialBrands, orders as initialOrders } from '../data/mockData';

interface CarContextType {
  cars: Car[];
  brands: Brand[];
  orders: Order[];
  filteredCars: Car[];
  filterByBrand: (brandId: string) => void;
  getBrandById: (brandId: string) => Brand | undefined;
  getCarById: (carId: string) => Car | undefined;
  placeOrder: (userId: string, carId: string) => void;
  getUserOrders: (userId: string) => Order[];
  resetFilter: () => void;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export const CarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cars] = useState<Car[]>(initialCars);
  const [brands] = useState<Brand[]>(initialBrands);
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);

  const filterByBrand = (brandId: string) => {
    if (brandId === 'all') {
      setFilteredCars(cars);
    } else {
      setFilteredCars(cars.filter(car => car.brandId === brandId));
    }
  };

  const resetFilter = () => {
    setFilteredCars(cars);
  };

  const getBrandById = (brandId: string): Brand | undefined => {
    return brands.find(brand => brand.id === brandId);
  };

  const getCarById = (carId: string): Car | undefined => {
    return cars.find(car => car.id === carId);
  };

  const placeOrder = (userId: string, carId: string) => {
    const newOrder: Order = {
      id: String(orders.length + 1),
      userId,
      carId,
      orderDate: new Date().toISOString().split('T')[0],
      status: 'pending'
    };
    
    setOrders([...orders, newOrder]);
  };

  const getUserOrders = (userId: string): Order[] => {
    return orders.filter(order => order.userId === userId);
  };

  return (
    <CarContext.Provider value={{ 
      cars, 
      brands, 
      orders, 
      filteredCars, 
      filterByBrand, 
      getBrandById, 
      getCarById, 
      placeOrder, 
      getUserOrders,
      resetFilter
    }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCars = (): CarContextType => {
  const context = useContext(CarContext);
  if (context === undefined) {
    throw new Error('useCars must be used within a CarProvider');
  }
  return context;
};