import { User, Brand, Car, Order } from '../types';

export const brands: Brand[] = [
  { id: '1', name: 'BMW' },
  { id: '2', name: 'Mercedes' },
  { id: '3', name: 'Audi' },
  { id: '4', name: 'Tesla' },
  { id: '5', name: 'Toyota' },
  { id: '6', name: 'Honda' },
  { id: '7', name: 'Ford' },
  { id: '8', name: 'Chevrolet' },
];

export const cars: Car[] = [
  {
    id: '1',
    brandId: '1',
    model: 'X5',
    horsePower: 335,
    color: 'Black',
    price: 65000,
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    brandId: '2',
    model: 'E-Class',
    horsePower: 362,
    color: 'Silver',
    price: 72000,
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    brandId: '3',
    model: 'A6',
    horsePower: 335,
    color: 'Blue',
    price: 68000,
    year: 2022,
    imageUrl: 'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '4',
    brandId: '4',
    model: 'Model 3',
    horsePower: 283,
    color: 'White',
    price: 48000,
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/11054616/pexels-photo-11054616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '5',
    brandId: '5',
    model: 'Camry',
    horsePower: 203,
    color: 'Red',
    price: 32000,
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/2036544/pexels-photo-2036544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '6',
    brandId: '6',
    model: 'Accord',
    horsePower: 192,
    color: 'Gray',
    price: 31000,
    year: 2022,
    imageUrl: 'https://images.pexels.com/photos/248687/pexels-photo-248687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '7',
    brandId: '7',
    model: 'Mustang',
    horsePower: 450,
    color: 'Yellow',
    price: 55000,
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '8',
    brandId: '8',
    model: 'Corvette',
    horsePower: 490,
    color: 'Orange',
    price: 82000,
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const users: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    address: '123 Admin St',
    phone: '555-1234',
    role: 'admin'
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    address: '456 Customer Ave',
    phone: '555-5678',
    role: 'customer'
  }
];

export const orders: Order[] = [
  {
    id: '1',
    userId: '2',
    carId: '1',
    orderDate: '2023-09-15',
    status: 'completed'
  }
];