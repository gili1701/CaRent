export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  role: 'admin' | 'customer';
}

export interface Brand {
  id: string;
  name: string;
}

export interface Car {
  id: string;
  brandId: string;
  model: string;
  horsePower: number;
  color: string;
  price: number;
  year: number;
  imageUrl: string;
}

export interface Order {
  id: string;
  userId: string;
  carId: string;
  orderDate: string;
  status: 'pending' | 'completed' | 'cancelled';
}