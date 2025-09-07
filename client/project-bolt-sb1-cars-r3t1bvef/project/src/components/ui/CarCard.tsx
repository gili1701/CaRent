import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Car } from '../../types';
import { useCars } from '../../context/CarContext';
import { Battery, Calendar, Gauge, Palette } from 'lucide-react';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { getBrandById } = useCars();
  const navigate = useNavigate();
  const brand = getBrandById(car.brandId);

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg"
      onClick={() => navigate(`/car/${car.id}`)}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={car.imageUrl} 
          alt={`${brand?.name} ${car.model}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-md font-medium">
          ${car.price.toLocaleString()}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold">{brand?.name} {car.model}</h3>
            <p className="text-gray-600 text-sm">{car.year}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-y-2 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <Gauge size={16} className="text-blue-600" />
            <span>{car.horsePower} HP</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-blue-600" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <Palette size={16} className="text-blue-600" />
            <span>{car.color}</span>
          </div>
          <div className="flex items-center gap-2">
            <Battery size={16} className="text-blue-600" />
            <span>Excellent</span>
          </div>
        </div>
        
        <div className="mt-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;