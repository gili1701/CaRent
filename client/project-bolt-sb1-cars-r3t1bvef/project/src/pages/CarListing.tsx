import React from 'react';
import { useCars } from '../context/CarContext';
import CarCard from '../components/ui/CarCard';
import BrandFilter from '../components/ui/BrandFilter';

const CarListing: React.FC = () => {
  const { filteredCars } = useCars();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Our Vehicle Collection</h1>
          <p className="text-gray-600 mt-2">
            Browse our extensive selection of premium vehicles
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Section */}
          <div className="w-full md:w-64 mb-6 md:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              
              <BrandFilter />
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Price Range
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Any Price</option>
                  <option value="1">Under $30,000</option>
                  <option value="2">$30,000 - $50,000</option>
                  <option value="3">$50,000 - $80,000</option>
                  <option value="4">$80,000+</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Year
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">From</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                  </select>
                  <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">To</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Color
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Black', 'White', 'Silver', 'Red', 'Blue'].map(color => (
                    <div 
                      key={color}
                      className="flex items-center"
                    >
                      <input 
                        type="checkbox" 
                        id={`color-${color}`} 
                        className="mr-2"
                      />
                      <label htmlFor={`color-${color}`}>{color}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
          
          {/* Car Listings */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredCars.length} vehicles
              </p>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Sort by: Default</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            
            {filteredCars.length === 0 && (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No cars found</h3>
                <p className="text-gray-600">
                  Try adjusting your filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarListing;